/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

type ParticipantStatus = 'queued'|'connecting'|'ringing'|'connected'|'complete'|'failed';

/**
 * Initialize the ParticipantList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that created the resource
 * @param conferenceSid - The SID of the conference the participant is in
 */
declare function ParticipantList(version: V2010, accountSid: string, conferenceSid: string): ParticipantListInstance;

/**
 * Options to pass to update
 *
 * @property announceMethod - The HTTP method we should use to call announce_url
 * @property announceUrl - The URL we call using the `announce_method` for an announcement to the participant
 * @property beepOnExit - Whether to play a notification beep to the conference when the participant exit
 * @property callSidToCoach - The SID of the participant who is being `coached`
 * @property coaching - Indicates if the participant changed to coach
 * @property endConferenceOnExit - Whether to end the conference when the participant leaves
 * @property hold - Whether the participant should be on hold
 * @property holdMethod - The HTTP method we should use to call hold_url
 * @property holdUrl - The URL we call using the `hold_method` for  music that plays when the participant is on hold
 * @property muted - Whether the participant should be muted
 * @property waitMethod - The HTTP method we should use to call `wait_url`
 * @property waitUrl - URL that hosts pre-conference hold music
 */
interface ParticipantInstanceUpdateOptions {
  announceMethod?: string;
  announceUrl?: string;
  beepOnExit?: boolean;
  callSidToCoach?: string;
  coaching?: boolean;
  endConferenceOnExit?: boolean;
  hold?: boolean;
  holdMethod?: string;
  holdUrl?: string;
  muted?: boolean;
  waitMethod?: string;
  waitUrl?: string;
}

interface ParticipantListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ParticipantContext;
  /**
   * create a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ParticipantListInstanceCreateOptions, callback?: (error: Error | null, item: ParticipantInstance) => any): Promise<ParticipantInstance>;
  /**
   * Streams ParticipantInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: ParticipantListInstanceEachOptions, callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a participant
   *
   * @param callSid - The Call SID of the resource to fetch
   */
  get(callSid: string): ParticipantContext;
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ParticipantListInstanceOptions, callback?: (error: Error | null, items: ParticipantInstance[]) => any): Promise<ParticipantInstance[]>;
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ParticipantListInstancePageOptions, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property beep - Whether to play a notification beep to the conference when the participant joins
 * @property byoc - BYOC trunk SID (Beta)
 * @property callSidToCoach - The SID of the participant who is being `coached`
 * @property coaching - Indicates if the participant changed to coach
 * @property conferenceRecord - Whether to record the conference the participant is joining
 * @property conferenceRecordingStatusCallback - The URL we should call using the `conference_recording_status_callback_method` when the conference recording is available
 * @property conferenceRecordingStatusCallbackEvent - The conference recording state changes that should generate a call to `conference_recording_status_callback`
 * @property conferenceRecordingStatusCallbackMethod - The HTTP method we should use to call `conference_recording_status_callback`
 * @property conferenceStatusCallback - The callback URL for conference events
 * @property conferenceStatusCallbackEvent - The conference state changes that should generate a call to `conference_status_callback`
 * @property conferenceStatusCallbackMethod - HTTP method for requesting `conference_status_callback` URL
 * @property conferenceTrim - Whether to trim leading and trailing silence from your recorded conference audio files
 * @property earlyMedia - Whether agents can hear the state of the outbound call
 * @property endConferenceOnExit - Whether to end the conference when the participant leaves
 * @property from - The `from` phone number used to invite a participant
 * @property maxParticipants - The maximum number of agent conference participants
 * @property muted - Whether to mute the agent
 * @property record - Whether to record the participant and their conferences
 * @property recordingChannels - Specify `mono` or `dual` recording channels
 * @property recordingStatusCallback - The URL that we should call using the `recording_status_callback_method` when the recording status changes
 * @property recordingStatusCallbackEvent - The recording state changes that should generate a call to `recording_status_callback`
 * @property recordingStatusCallbackMethod - The HTTP method we should use when we call `recording_status_callback`
 * @property region - The region where we should mix the conference audio
 * @property sipAuthPassword - The SIP password for authentication
 * @property sipAuthUsername - The SIP username used for authentication
 * @property startConferenceOnEnter - Whether the conference starts when the participant joins the conference
 * @property statusCallback - The URL we should call to send status information to your application
 * @property statusCallbackEvent - Set state change events that will trigger a callback
 * @property statusCallbackMethod - The HTTP method we should use to call `status_callback`
 * @property timeout - he number of seconds that we should wait for an answer
 * @property to - The number, client id, or sip address of the new participant
 * @property waitMethod - The HTTP method we should use to call `wait_url`
 * @property waitUrl - URL that hosts pre-conference hold music
 */
interface ParticipantListInstanceCreateOptions {
  beep?: string;
  byoc?: string;
  callSidToCoach?: string;
  coaching?: boolean;
  conferenceRecord?: string;
  conferenceRecordingStatusCallback?: string;
  conferenceRecordingStatusCallbackEvent?: string | string[];
  conferenceRecordingStatusCallbackMethod?: string;
  conferenceStatusCallback?: string;
  conferenceStatusCallbackEvent?: string | string[];
  conferenceStatusCallbackMethod?: string;
  conferenceTrim?: string;
  earlyMedia?: boolean;
  endConferenceOnExit?: boolean;
  from: string;
  maxParticipants?: number;
  muted?: boolean;
  record?: boolean;
  recordingChannels?: string;
  recordingStatusCallback?: string;
  recordingStatusCallbackEvent?: string | string[];
  recordingStatusCallbackMethod?: string;
  region?: string;
  sipAuthPassword?: string;
  sipAuthUsername?: string;
  startConferenceOnEnter?: boolean;
  statusCallback?: string;
  statusCallbackEvent?: string | string[];
  statusCallbackMethod?: string;
  timeout?: number;
  to: string;
  waitMethod?: string;
  waitUrl?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property coaching - Whether to return only participants who are coaching another call
 * @property done - Function to be called upon completion of streaming
 * @property hold - Whether to return only participants that are on hold
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property muted - Whether to return only participants that are muted
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface ParticipantListInstanceEachOptions {
  callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void;
  coaching?: boolean;
  done?: Function;
  hold?: boolean;
  limit?: number;
  muted?: boolean;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property coaching - Whether to return only participants who are coaching another call
 * @property hold - Whether to return only participants that are on hold
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property muted - Whether to return only participants that are muted
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface ParticipantListInstanceOptions {
  coaching?: boolean;
  hold?: boolean;
  limit?: number;
  muted?: boolean;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property coaching - Whether to return only participants who are coaching another call
 * @property hold - Whether to return only participants that are on hold
 * @property muted - Whether to return only participants that are muted
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface ParticipantListInstancePageOptions {
  coaching?: boolean;
  hold?: boolean;
  muted?: boolean;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ParticipantPayload extends ParticipantResource, Page.TwilioResponsePayload {
}

interface ParticipantResource {
  account_sid: string;
  call_sid: string;
  call_sid_to_coach: string;
  coaching: boolean;
  conference_sid: string;
  date_created: Date;
  date_updated: Date;
  end_conference_on_exit: boolean;
  hold: boolean;
  muted: boolean;
  start_conference_on_enter: boolean;
  status: ParticipantStatus;
  uri: string;
}

interface ParticipantSolution {
  accountSid?: string;
  conferenceSid?: string;
}


declare class ParticipantContext {
  /**
   * Initialize the ParticipantContext
   *
   * @param version - Version of the resource
   * @param accountSid - The SID of the Account that created the resource to fetch
   * @param conferenceSid - The SID of the conference with the participant to fetch
   * @param callSid - The Call SID of the resource to fetch
   */
  constructor(version: V2010, accountSid: string, conferenceSid: string, callSid: string);

  /**
   * fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ParticipantInstance) => any): Promise<ParticipantInstance>;
  /**
   * remove a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ParticipantInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ParticipantInstanceUpdateOptions, callback?: (error: Error | null, items: ParticipantInstance) => any): Promise<ParticipantInstance>;
}


declare class ParticipantInstance extends SerializableClass {
  /**
   * Initialize the ParticipantContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The SID of the Account that created the resource
   * @param conferenceSid - The SID of the conference the participant is in
   * @param callSid - The Call SID of the resource to fetch
   */
  constructor(version: V2010, payload: ParticipantPayload, accountSid: string, conferenceSid: string, callSid: string);

  private _proxy: ParticipantContext;
  accountSid: string;
  callSid: string;
  callSidToCoach: string;
  coaching: boolean;
  conferenceSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  endConferenceOnExit: boolean;
  /**
   * fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ParticipantInstance) => any): Promise<ParticipantInstance>;
  hold: boolean;
  muted: boolean;
  /**
   * remove a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ParticipantInstance) => any): Promise<boolean>;
  startConferenceOnEnter: boolean;
  status: ParticipantStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ParticipantInstanceUpdateOptions, callback?: (error: Error | null, items: ParticipantInstance) => any): Promise<ParticipantInstance>;
  uri: string;
}


declare class ParticipantPage extends Page<V2010, ParticipantPayload, ParticipantResource, ParticipantInstance> {
  /**
   * Initialize the ParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: ParticipantSolution);

  /**
   * Build an instance of ParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ParticipantPayload): ParticipantInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ParticipantContext, ParticipantInstance, ParticipantInstanceUpdateOptions, ParticipantList, ParticipantListInstance, ParticipantListInstanceCreateOptions, ParticipantListInstanceEachOptions, ParticipantListInstanceOptions, ParticipantListInstancePageOptions, ParticipantPage, ParticipantPayload, ParticipantResource, ParticipantSolution, ParticipantStatus }
