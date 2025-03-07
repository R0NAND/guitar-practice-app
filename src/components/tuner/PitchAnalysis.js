import * as PitchDetector from "pitchy";

class PitchAnalysis extends AudioWorkletProcessor {
    constructor(options) {
        super();

        if(options.processorOptions['sampleFrequency']){
            this._sampleFrequency = options.processorOptions['sampleFrequency'];
        }else{
            this._sampleFrequency = 5; //defaults to 5Hz
        }

        if(options.processorOptions['confidence']){
            this._confidence = options.processorOptions['confidence'];
        }else{
            this._confidence = 0.9; //defaults to only returning frequencies with a confidence over or equal to 0.9
        }
        this._id = Math.random();
        this._bufferSize = 2048;
        this._buffer = new Float32Array(this._bufferSize);
        this._isProcessingBuffer = true;
        this._pitchFinder = PitchDetector.PitchDetector.forFloat32Array(this._bufferSize);
        if(sampleRate / this._sampleFrequency < this._bufferSize){
            throw new Error('Sample Frequency of ${this._sampleFrequency} HZ is too high!'); //TODO fix this string
        }
        this._bufferCount = 0;
        this._timingCount = 0; // Used to tell how much time has elapsed to maintain sampling frequency
    }

    _appendToBuffer(value) {
        try{
            for (let i = 0; i < value.length; i++) {
                this._buffer[this._bufferCount + i] = value[i]; //TODO: Check what happens if buffer size is not factor of 128
            }
            this._bufferCount += value.length;
        }catch{
            throw console.error(value);
        }
    }

    process(inputs, outputs, parameters) {
        if(inputs[0][0] === undefined){
            // An empty array gets passed in as input when the mic is turned off
            // This check prevents the processor crashing in such a case
            return true;
        }
        
        if(this._isProcessingBuffer){ 
            this._appendToBuffer(inputs[0][0]);
            if(this._bufferCount >= this._bufferSize){
                let result = this._pitchFinder.findPitch(this._buffer, sampleRate);
                let pitch = result[0];
                this.port.postMessage({
                    eventType: 'data',
                    frequency: result[1] >= this._confidence ? pitch : null,
                });
                this._timingCount = this._bufferCount;
                this._bufferCount = 0;
                this._isProcessingBuffer = false;
            }
            return true;
        }else{
            this._timingCount += inputs[0][0].length;
            if(this._timingCount >= sampleRate / this._sampleFrequency){
                this._timingCount = 0;
                this._isProcessingBuffer = true;
            }
        }
        return true;
    }
}

registerProcessor("PitchAnalysis", PitchAnalysis);
