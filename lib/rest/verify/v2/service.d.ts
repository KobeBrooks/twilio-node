/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V2 = require('../V2');
import serialize = require('../../../base/serialize');
import { MessagingConfigurationList } from './service/messagingConfiguration';
import { MessagingConfigurationListInstance } from './service/messagingConfiguration';
import { RateLimitList } from './service/rateLimit';
import { RateLimitListInstance } from './service/rateLimit';
import { SerializableClass } from '../../../interfaces';
import { VerificationCheckList } from './service/verificationCheck';
import { VerificationCheckListInstance } from './service/verificationCheck';
import { VerificationList } from './service/verification';
import { VerificationListInstance } from './service/verification';

/**
 * Initialize the ServiceList
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V2): ServiceListInstance;

/**
 * Options to pass to update
 *
 * @property codeLength - The length of the verification code to generate
 * @property doNotShareWarningEnabled - Whether to add a privacy warning at the end of an SMS.
 * @property dtmfInputRequired - Whether to ask the user to press a number before delivering the verify code in a phone call
 * @property friendlyName - A string to describe the verification service
 * @property lookupEnabled - Whether to perform a lookup with each verification
 * @property psd2Enabled - Whether to pass PSD2 transaction parameters when starting a verification
 * @property skipSmsToLandlines - Whether to skip sending SMS verifications to landlines
 * @property ttsName - The name of an alternative text-to-speech service to use in phone calls
 */
interface ServiceInstanceUpdateOptions {
  codeLength?: number;
  doNotShareWarningEnabled?: boolean;
  dtmfInputRequired?: boolean;
  friendlyName?: string;
  lookupEnabled?: boolean;
  psd2Enabled?: boolean;
  skipSmsToLandlines?: boolean;
  ttsName?: string;
}

interface ServiceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ServiceListInstanceCreateOptions, callback?: (error: Error | null, item: ServiceInstance) => any): Promise<ServiceInstance>;
  /**
   * Streams ServiceInstance records from the API.
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
  each(opts?: ServiceListInstanceEachOptions, callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a service
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): ServiceContext;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ServiceListInstanceOptions, callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ServiceListInstancePageOptions, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property codeLength - The length of the verification code to generate
 * @property doNotShareWarningEnabled - Whether to add a security warning at the end of an SMS.
 * @property dtmfInputRequired - Whether to ask the user to press a number before delivering the verify code in a phone call
 * @property friendlyName - A string to describe the verification service
 * @property lookupEnabled - Whether to perform a lookup with each verification
 * @property psd2Enabled - Whether to pass PSD2 transaction parameters when starting a verification
 * @property skipSmsToLandlines - Whether to skip sending SMS verifications to landlines
 * @property ttsName - The name of an alternative text-to-speech service to use in phone calls
 */
interface ServiceListInstanceCreateOptions {
  codeLength?: number;
  doNotShareWarningEnabled?: boolean;
  dtmfInputRequired?: boolean;
  friendlyName: string;
  lookupEnabled?: boolean;
  psd2Enabled?: boolean;
  skipSmsToLandlines?: boolean;
  ttsName?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface ServiceListInstanceEachOptions {
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface ServiceListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface ServiceListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceResource {
  account_sid: string;
  code_length: number;
  date_created: Date;
  date_updated: Date;
  do_not_share_warning_enabled: boolean;
  dtmf_input_required: boolean;
  friendly_name: string;
  links: string;
  lookup_enabled: boolean;
  psd2_enabled: boolean;
  sid: string;
  skip_sms_to_landlines: boolean;
  tts_name: string;
  url: string;
}

interface ServiceSolution {
}


declare class ServiceContext {
  /**
   * Initialize the ServiceContext
   *
   * @param version - Version of the resource
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2, sid: string);

  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): Promise<ServiceInstance>;
  messagingConfigurations: MessagingConfigurationListInstance;
  rateLimits: RateLimitListInstance;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): Promise<ServiceInstance>;
  verificationChecks: VerificationCheckListInstance;
  verifications: VerificationListInstance;
}


declare class ServiceInstance extends SerializableClass {
  /**
   * Initialize the ServiceContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2, payload: ServicePayload, sid: string);

  private _proxy: ServiceContext;
  accountSid: string;
  codeLength: number;
  dateCreated: Date;
  dateUpdated: Date;
  doNotShareWarningEnabled: boolean;
  dtmfInputRequired: boolean;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): Promise<ServiceInstance>;
  friendlyName: string;
  links: string;
  lookupEnabled: boolean;
  /**
   * Access the messagingConfigurations
   */
  messagingConfigurations(): MessagingConfigurationListInstance;
  psd2Enabled: boolean;
  /**
   * Access the rateLimits
   */
  rateLimits(): RateLimitListInstance;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): Promise<boolean>;
  sid: string;
  skipSmsToLandlines: boolean;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  ttsName: string;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): Promise<ServiceInstance>;
  url: string;
  /**
   * Access the verificationChecks
   */
  verificationChecks(): VerificationCheckListInstance;
  /**
   * Access the verifications
   */
  verifications(): VerificationListInstance;
}


declare class ServicePage extends Page<V2, ServicePayload, ServiceResource, ServiceInstance> {
  /**
   * Initialize the ServicePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: ServiceSolution);

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ServicePayload): ServiceInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ServiceContext, ServiceInstance, ServiceInstanceUpdateOptions, ServiceList, ServiceListInstance, ServiceListInstanceCreateOptions, ServiceListInstanceEachOptions, ServiceListInstanceOptions, ServiceListInstancePageOptions, ServicePage, ServicePayload, ServiceResource, ServiceSolution }
