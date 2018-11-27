import AuthAdapter from '../../authAdapter';

class MailchimpAuthAdapter extends AuthAdapter {

  constructor(test_api_key) {
    super();

    if(!test_api_key)
      throw new Error('API key is required');
    if(test_api_key.length != 12)
      throw new Error('API key is incorrect');

    this.test_api_key = test_api_key;
  }

  getLists() {

    return new Promise((resolve, reject) => {
      resolve({ result: "Success!!!", api_key: this.test_api_key });
    });
  }
}

export default MailchimpAuthAdapter;
