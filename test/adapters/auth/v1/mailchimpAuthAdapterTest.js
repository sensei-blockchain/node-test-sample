import chai from 'chai';
import MailchimpAuthAdapter from '../../../../app/adapters/auth/v1/mailchimpAuthAdapter';
import config from '../../../fixture.json';

describe('Mailchimp Auth Adapter', function() {

  let authAdapter;

  before(function() {
    authAdapter = new MailchimpAuthAdapter(config.mailchimp.testApiKey);
  });

  describe('#createAuthAdapter', function() {

    it('should raise api key require error', function(done) {
      try {
        new MailchimpAuthAdapter();
        done(new Error('the test case should fail'));
      }
      catch(apiKeyError) {
        chai.expect(apiKeyError).to.be.a.instanceof(Error);
        chai.expect(apiKeyError.message).to.equal('API key is required');
        done();
      }
    });

    it('should raise invalid api key error', function(done) {
      try {
        new MailchimpAuthAdapter('an invalid api key');
        done(new Error('the test case should fail'))
      }
      catch(apiKeyError) {
        chai.expect(apiKeyError).to.be.a.instanceof(Error);
        chai.expect(apiKeyError.message).to.equal('API key is incorrect');
        done();
      }
    });

  });

  describe('#getLists()', function() {

    it('should return lists', function(done) {
      authAdapter.getLists()
       .then(response => {
          chai.expect(response).to.be.a('object');
          chai.expect(response).to.have.all.keys('result', 'api_key');
          chai.expect(response.result).to.equal('Success!!!');
          chai.expect(response.api_key).to.have.length(12);
          done();
        })
       .catch(errorOnOperation => done(errorOnOperation));
    });

  });

});
