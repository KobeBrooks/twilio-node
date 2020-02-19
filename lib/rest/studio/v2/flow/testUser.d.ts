/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2 = require('../../V2');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the FlowTestUserList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param sid - The sid
 */
declare function FlowTestUserList(version: V2, sid: string): FlowTestUserListInstance;

/**
 * Options to pass to update
 *
 * @property testUsers - The test_users
 */
interface FlowTestUserInstanceUpdateOptions {
  testUsers: string | string[];
}

interface FlowTestUserListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FlowTestUserContext;
  /**
   * Constructs a flow_test_user
   */
  get(): FlowTestUserContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface FlowTestUserPayload extends FlowTestUserResource, Page.TwilioResponsePayload {
}

interface FlowTestUserResource {
  sid: string;
  test_users: string[];
  url: string;
}

interface FlowTestUserSolution {
  sid?: string;
}


declare class FlowTestUserContext {
  /**
   * Initialize the FlowTestUserContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: V2, sid: string);

  /**
   * fetch a FlowTestUserInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FlowTestUserInstance) => any): Promise<FlowTestUserInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a FlowTestUserInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: FlowTestUserInstanceUpdateOptions, callback?: (error: Error | null, items: FlowTestUserInstance) => any): Promise<FlowTestUserInstance>;
}


declare class FlowTestUserInstance extends SerializableClass {
  /**
   * Initialize the FlowTestUserContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V2, payload: FlowTestUserPayload, sid: string);

  private _proxy: FlowTestUserContext;
  /**
   * fetch a FlowTestUserInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FlowTestUserInstance) => any): Promise<FlowTestUserInstance>;
  sid: string;
  testUsers: string[];
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a FlowTestUserInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: FlowTestUserInstanceUpdateOptions, callback?: (error: Error | null, items: FlowTestUserInstance) => any): Promise<FlowTestUserInstance>;
  url: string;
}


declare class FlowTestUserPage extends Page<V2, FlowTestUserPayload, FlowTestUserResource, FlowTestUserInstance> {
  /**
   * Initialize the FlowTestUserPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: FlowTestUserSolution);

  /**
   * Build an instance of FlowTestUserInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FlowTestUserPayload): FlowTestUserInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { FlowTestUserContext, FlowTestUserInstance, FlowTestUserInstanceUpdateOptions, FlowTestUserList, FlowTestUserListInstance, FlowTestUserPage, FlowTestUserPayload, FlowTestUserResource, FlowTestUserSolution }
