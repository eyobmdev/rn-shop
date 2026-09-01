import Bugsnag from "@bugsnag/expo";

const start = () => {
  Bugsnag.start();
};

const log = (error, metadata) => {
  if (__DEV__) {
    console.log(error);
  }

  Bugsnag.notify(error, (event) => {
    if (metadata) {
      event.addMetadata("extra", metadata);
    }
  });
};

export default { log, start };