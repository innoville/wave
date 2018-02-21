var aws = require('aws-sdk');
aws.config.loadFromPath('./config.json');
var trans = new aws.TranscribeService({apiVersion: '2017-10-26'});
var params = {
  LanguageCode: "en-US",
  Media: {
    MediaFileUri: "https://s3.amazonaws.com/video-src-repo/test.mp4" 
  },
  MediaFormat: "mp4",
  TranscriptionJobName: 'stt-test'
  //MediaSampleRateHertz: 0 
};

trans.startTranscriptionJob(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log (data);
});


