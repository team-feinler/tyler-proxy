const faker = require('faker');

const fakeHeader = () => faker.lorem.sentence().slice(0, -1);
const fakeSentence = () => faker.lorem.sentence();
const fakeDescription = () => faker.lorem.sentences();
const fakeTitle = () => faker.name.jobArea();

module.exports.generatefFeaturesTableRecord = () => {
  const record = {
    feature_banner_header: `'${fakeHeader()}'`,
    feature_banner_text_1: `'${fakeDescription()}'`,
    feature_banner_text_2: `'${fakeDescription()}'`,
    feature_setup_header: `'${fakeHeader()}'`,
    feature_setup_description_1: `'${fakeSentence()}'`,
    feature_setup_description_2: `'${fakeSentence()}'`,
    feature_setup_description_3: `'${fakeSentence()}'`,
    additional_features_header: `'${fakeHeader()}'`,
    additional_features_description: `'${fakeDescription()}'`,
  };

  return record;
}
