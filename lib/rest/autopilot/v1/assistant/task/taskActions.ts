/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Autopilot
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to update a TaskActionsInstance
 */
export interface TaskActionsContextUpdateOptions {
  /** The JSON string that specifies the [actions](https://www.twilio.com/docs/autopilot/actions) that instruct the Assistant on how to perform the task. */
  actions?: any;
}

export interface TaskActionsContext {
  /**
   * Fetch a TaskActionsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskActionsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskActionsInstance) => any
  ): Promise<TaskActionsInstance>;

  /**
   * Update a TaskActionsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskActionsInstance
   */
  update(
    callback?: (error: Error | null, item?: TaskActionsInstance) => any
  ): Promise<TaskActionsInstance>;
  /**
   * Update a TaskActionsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskActionsInstance
   */
  update(
    params: TaskActionsContextUpdateOptions,
    callback?: (error: Error | null, item?: TaskActionsInstance) => any
  ): Promise<TaskActionsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TaskActionsContextSolution {
  assistantSid: string;
  taskSid: string;
}

export class TaskActionsContextImpl implements TaskActionsContext {
  protected _solution: TaskActionsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, assistantSid: string, taskSid: string) {
    if (!isValidPathParam(assistantSid)) {
      throw new Error("Parameter 'assistantSid' is not valid.");
    }

    if (!isValidPathParam(taskSid)) {
      throw new Error("Parameter 'taskSid' is not valid.");
    }

    this._solution = { assistantSid, taskSid };
    this._uri = `/Assistants/${assistantSid}/Tasks/${taskSid}/Actions`;
  }

  fetch(
    callback?: (error: Error | null, item?: TaskActionsInstance) => any
  ): Promise<TaskActionsInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskActionsInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid,
          instance._solution.taskSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | TaskActionsContextUpdateOptions
      | ((error: Error | null, item?: TaskActionsInstance) => any),
    callback?: (error: Error | null, item?: TaskActionsInstance) => any
  ): Promise<TaskActionsInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["actions"] !== undefined)
      data["Actions"] = serialize.object(params["actions"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TaskActionsInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid,
          instance._solution.taskSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface TaskActionsPayload extends TaskActionsResource {}

interface TaskActionsResource {
  account_sid: string;
  assistant_sid: string;
  task_sid: string;
  url: string;
  data: any;
}

export class TaskActionsInstance {
  protected _solution: TaskActionsContextSolution;
  protected _context?: TaskActionsContext;

  constructor(
    protected _version: V1,
    payload: TaskActionsResource,
    assistantSid: string,
    taskSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.assistantSid = payload.assistant_sid;
    this.taskSid = payload.task_sid;
    this.url = payload.url;
    this.data = payload.data;

    this._solution = { assistantSid, taskSid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The SID of the Assistant that is the parent of the Task associated with the resource
   */
  assistantSid: string;
  /**
   * The SID of the Task associated with the resource
   */
  taskSid: string;
  /**
   * The absolute URL of the TaskActions resource
   */
  url: string;
  /**
   * The JSON string that specifies the actions that instruct the Assistant on how to perform the task
   */
  data: any;

  private get _proxy(): TaskActionsContext {
    this._context =
      this._context ||
      new TaskActionsContextImpl(
        this._version,
        this._solution.assistantSid,
        this._solution.taskSid
      );
    return this._context;
  }

  /**
   * Fetch a TaskActionsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskActionsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TaskActionsInstance) => any
  ): Promise<TaskActionsInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a TaskActionsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskActionsInstance
   */
  update(
    callback?: (error: Error | null, item?: TaskActionsInstance) => any
  ): Promise<TaskActionsInstance>;
  /**
   * Update a TaskActionsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TaskActionsInstance
   */
  update(
    params: TaskActionsContextUpdateOptions,
    callback?: (error: Error | null, item?: TaskActionsInstance) => any
  ): Promise<TaskActionsInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: TaskActionsInstance) => any
  ): Promise<TaskActionsInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      assistantSid: this.assistantSid,
      taskSid: this.taskSid,
      url: this.url,
      data: this.data,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TaskActionsSolution {
  assistantSid: string;
  taskSid: string;
}

export interface TaskActionsListInstance {
  _version: V1;
  _solution: TaskActionsSolution;
  _uri: string;

  (): TaskActionsContext;
  get(): TaskActionsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TaskActionsListInstance(
  version: V1,
  assistantSid: string,
  taskSid: string
): TaskActionsListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  if (!isValidPathParam(taskSid)) {
    throw new Error("Parameter 'taskSid' is not valid.");
  }

  const instance = (() => instance.get()) as TaskActionsListInstance;

  instance.get = function get(): TaskActionsContext {
    return new TaskActionsContextImpl(version, assistantSid, taskSid);
  };

  instance._version = version;
  instance._solution = { assistantSid, taskSid };
  instance._uri = ``;

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}
