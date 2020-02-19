'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Execution', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.studio.v2.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var flowSid = 'FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://studio.twilio.com/v2/Flows/${flowSid}/Executions`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'previous_page_url': null,
              'next_page_url': null,
              'url': 'https://studio.twilio.com/v2/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Executions?PageSize=50&Page=0',
              'page': 0,
              'first_page_url': 'https://studio.twilio.com/v2/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Executions?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'executions'
          },
          'executions': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.studio.v2.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.studio.v2.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var flowSid = 'FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://studio.twilio.com/v2/Flows/${flowSid}/Executions/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'contact_channel_address': '+14155555555',
          'status': 'ended',
          'context': {},
          'date_created': '2017-11-06T12:00:00Z',
          'date_updated': null,
          'url': 'https://studio.twilio.com/v2/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Executions/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'steps': 'https://studio.twilio.com/v2/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Executions/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Steps',
              'execution_context': 'https://studio.twilio.com/v2/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Executions/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Context'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.studio.v2.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {to: '+15558675310', from: '+15017122661'};
      var promise = client.studio.v2.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var flowSid = 'FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://studio.twilio.com/v2/Flows/${flowSid}/Executions`;

      var values = {To: '+15558675310', From: '+15017122661', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = JSON.stringify({
          'url': 'https://studio.twilio.com/v2/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Executions/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'context': {},
          'contact_channel_address': '+18001234567',
          'status': 'active',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'links': {
              'steps': 'https://studio.twilio.com/v2/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Executions/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Steps',
              'execution_context': 'https://studio.twilio.com/v2/Flows/FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Executions/FNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Context'
          }
      });

      holodeck.mock(new Response(201, body));

      var opts = {to: '+15558675310', from: '+15017122661'};
      var promise = client.studio.v2.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.studio.v2.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var flowSid = 'FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://studio.twilio.com/v2/Flows/${flowSid}/Executions/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.studio.v2.flows('FWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .executions('FNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
