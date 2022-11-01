/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Chat
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { BindingListInstance } from "./service/binding";
import { ChannelListInstance } from "./service/channel";
import { RoleListInstance } from "./service/role";
import { UserListInstance } from "./service/user";




/**
 * Options to pass to update a ServiceInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource.
 * @property { string } [defaultServiceRoleSid] The service role assigned to users when they are added to the service. See the [Role resource](https://www.twilio.com/docs/chat/rest/role-resource) for more info about roles.
 * @property { string } [defaultChannelRoleSid] The channel role assigned to users when they are added to a channel. See the [Role resource](https://www.twilio.com/docs/chat/rest/role-resource) for more info about roles.
 * @property { string } [defaultChannelCreatorRoleSid] The channel role assigned to a channel creator when they join a new channel. See the [Role resource](https://www.twilio.com/docs/chat/rest/role-resource) for more info about roles.
 * @property { boolean } [readStatusEnabled] Whether to enable the [Message Consumption Horizon](https://www.twilio.com/docs/chat/consumption-horizon) feature. The default is &#x60;true&#x60;.
 * @property { boolean } [reachabilityEnabled] Whether to enable the [Reachability Indicator](https://www.twilio.com/docs/chat/reachability-indicator) for this Service instance. The default is &#x60;false&#x60;.
 * @property { number } [typingIndicatorTimeout] How long in seconds after a &#x60;started typing&#x60; event until clients should assume that user is no longer typing, even if no &#x60;ended typing&#x60; message was received.  The default is 5 seconds.
 * @property { number } [consumptionReportInterval] DEPRECATED. The interval in seconds between consumption reports submission batches from client endpoints.
 * @property { boolean } [notifications.newMessage.enabled] Whether to send a notification when a new message is added to a channel. The default is &#x60;false&#x60;.
 * @property { string } [notifications.newMessage.template] The template to use to create the notification text displayed when a new message is added to a channel and &#x60;notifications.new_message.enabled&#x60; is &#x60;true&#x60;.
 * @property { string } [notifications.newMessage.sound] The name of the sound to play when a new message is added to a channel and &#x60;notifications.new_message.enabled&#x60; is &#x60;true&#x60;.
 * @property { boolean } [notifications.newMessage.badgeCountEnabled] Whether the new message badge is enabled. The default is &#x60;false&#x60;.
 * @property { boolean } [notifications.addedToChannel.enabled] Whether to send a notification when a member is added to a channel. The default is &#x60;false&#x60;.
 * @property { string } [notifications.addedToChannel.template] The template to use to create the notification text displayed when a member is added to a channel and &#x60;notifications.added_to_channel.enabled&#x60; is &#x60;true&#x60;.
 * @property { string } [notifications.addedToChannel.sound] The name of the sound to play when a member is added to a channel and &#x60;notifications.added_to_channel.enabled&#x60; is &#x60;true&#x60;.
 * @property { boolean } [notifications.removedFromChannel.enabled] Whether to send a notification to a user when they are removed from a channel. The default is &#x60;false&#x60;.
 * @property { string } [notifications.removedFromChannel.template] The template to use to create the notification text displayed to a user when they are removed from a channel and &#x60;notifications.removed_from_channel.enabled&#x60; is &#x60;true&#x60;.
 * @property { string } [notifications.removedFromChannel.sound] The name of the sound to play to a user when they are removed from a channel and &#x60;notifications.removed_from_channel.enabled&#x60; is &#x60;true&#x60;.
 * @property { boolean } [notifications.invitedToChannel.enabled] Whether to send a notification when a user is invited to a channel. The default is &#x60;false&#x60;.
 * @property { string } [notifications.invitedToChannel.template] The template to use to create the notification text displayed when a user is invited to a channel and &#x60;notifications.invited_to_channel.enabled&#x60; is &#x60;true&#x60;.
 * @property { string } [notifications.invitedToChannel.sound] The name of the sound to play when a user is invited to a channel and &#x60;notifications.invited_to_channel.enabled&#x60; is &#x60;true&#x60;.
 * @property { string } [preWebhookUrl] The URL for pre-event webhooks, which are called by using the &#x60;webhook_method&#x60;. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
 * @property { string } [postWebhookUrl] The URL for post-event webhooks, which are called by using the &#x60;webhook_method&#x60;. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
 * @property { string } [webhookMethod] The HTTP method to use for calls to the &#x60;pre_webhook_url&#x60; and &#x60;post_webhook_url&#x60; webhooks.  Can be: &#x60;POST&#x60; or &#x60;GET&#x60; and the default is &#x60;POST&#x60;. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
 * @property { Array<string> } [webhookFilters] The list of webhook events that are enabled for this Service instance. See [Webhook Events](https://www.twilio.com/docs/chat/webhook-events) for more details.
 * @property { number } [limits.channelMembers] The maximum number of Members that can be added to Channels within this Service. Can be up to 1,000.
 * @property { number } [limits.userChannels] The maximum number of Channels Users can be a Member of within this Service. Can be up to 1,000.
 * @property { string } [media.compatibilityMessage] The message to send when a media message has no text. Can be used as placeholder message.
 * @property { number } [preWebhookRetryCount] The number of times to retry a call to the &#x60;pre_webhook_url&#x60; if the request times out (after 5 seconds) or it receives a 429, 503, or 504 HTTP response. Default retry count is 0 times, which means the call won\\\&#39;t be retried.
 * @property { number } [postWebhookRetryCount] The number of times to retry a call to the &#x60;post_webhook_url&#x60; if the request times out (after 5 seconds) or it receives a 429, 503, or 504 HTTP response. The default is 0, which means the call won\\\&#39;t be retried.
 * @property { boolean } [notifications.logEnabled] Whether to log notifications. The default is &#x60;false&#x60;.
 */
export interface ServiceContextUpdateOptions {
  "friendlyName"?: string;
  "defaultServiceRoleSid"?: string;
  "defaultChannelRoleSid"?: string;
  "defaultChannelCreatorRoleSid"?: string;
  "readStatusEnabled"?: boolean;
  "reachabilityEnabled"?: boolean;
  "typingIndicatorTimeout"?: number;
  "consumptionReportInterval"?: number;
  "notifications.newMessage.enabled"?: boolean;
  "notifications.newMessage.template"?: string;
  "notifications.newMessage.sound"?: string;
  "notifications.newMessage.badgeCountEnabled"?: boolean;
  "notifications.addedToChannel.enabled"?: boolean;
  "notifications.addedToChannel.template"?: string;
  "notifications.addedToChannel.sound"?: string;
  "notifications.removedFromChannel.enabled"?: boolean;
  "notifications.removedFromChannel.template"?: string;
  "notifications.removedFromChannel.sound"?: string;
  "notifications.invitedToChannel.enabled"?: boolean;
  "notifications.invitedToChannel.template"?: string;
  "notifications.invitedToChannel.sound"?: string;
  "preWebhookUrl"?: string;
  "postWebhookUrl"?: string;
  "webhookMethod"?: string;
  "webhookFilters"?: Array<string>;
  "limits.channelMembers"?: number;
  "limits.userChannels"?: number;
  "media.compatibilityMessage"?: string;
  "preWebhookRetryCount"?: number;
  "postWebhookRetryCount"?: number;
  "notifications.logEnabled"?: boolean;
}

/**
 * Options to pass to create a ServiceInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the new resource.
 */
export interface ServiceListInstanceCreateOptions {
  "friendlyName": string;
}
/**
 * Options to pass to each
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ServiceListInstanceEachOptions {
  "pageSize"?: number;
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ServiceListInstanceOptions {
  "pageSize"?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ServiceListInstancePageOptions {
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface ServiceContext {

  bindings: BindingListInstance;
  channels: ChannelListInstance;
  roles: RoleListInstance;
  users: UserListInstance;

  /**
   * Remove a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  fetch(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>


  /**
   * Update a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
  /**
   * Update a ServiceInstance
   *
   * @param { ServiceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(params: ServiceContextUpdateOptions, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
  update(params?: any, callback?: any): Promise<ServiceInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ServiceContextSolution {
  "sid"?: string;
}

export class ServiceContextImpl implements ServiceContext {
  protected _solution: ServiceContextSolution;
  protected _uri: string;

  protected _bindings?: BindingListInstance;
  protected _channels?: ChannelListInstance;
  protected _roles?: RoleListInstance;
  protected _users?: UserListInstance;

  constructor(protected _version: V2, sid: string) {
    this._solution = { sid };
    this._uri = `/Services/${sid}`;
  }

  get bindings(): BindingListInstance {
    this._bindings = this._bindings || BindingListInstance(this._version, this._solution.sid);
    return this._bindings;
  }

  get channels(): ChannelListInstance {
    this._channels = this._channels || ChannelListInstance(this._version, this._solution.sid);
    return this._channels;
  }

  get roles(): RoleListInstance {
    this._roles = this._roles || RoleListInstance(this._version, this._solution.sid);
    return this._roles;
  }

  get users(): UserListInstance {
    this._users = this._users || UserListInstance(this._version, this._solution.sid);
    return this._users;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: "delete" });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<ServiceInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new ServiceInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<ServiceInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["friendlyName"] !== undefined) data["FriendlyName"] = params["friendlyName"];
    if (params["defaultServiceRoleSid"] !== undefined) data["DefaultServiceRoleSid"] = params["defaultServiceRoleSid"];
    if (params["defaultChannelRoleSid"] !== undefined) data["DefaultChannelRoleSid"] = params["defaultChannelRoleSid"];
    if (params["defaultChannelCreatorRoleSid"] !== undefined) data["DefaultChannelCreatorRoleSid"] = params["defaultChannelCreatorRoleSid"];
    if (params["readStatusEnabled"] !== undefined) data["ReadStatusEnabled"] = serialize.bool(params["readStatusEnabled"]);
    if (params["reachabilityEnabled"] !== undefined) data["ReachabilityEnabled"] = serialize.bool(params["reachabilityEnabled"]);
    if (params["typingIndicatorTimeout"] !== undefined) data["TypingIndicatorTimeout"] = params["typingIndicatorTimeout"];
    if (params["consumptionReportInterval"] !== undefined) data["ConsumptionReportInterval"] = params["consumptionReportInterval"];
    if (params["notifications.newMessage.enabled"] !== undefined) data["Notifications.NewMessage.Enabled"] = serialize.bool(params["notifications.newMessage.enabled"]);
    if (params["notifications.newMessage.template"] !== undefined) data["Notifications.NewMessage.Template"] = params["notifications.newMessage.template"];
    if (params["notifications.newMessage.sound"] !== undefined) data["Notifications.NewMessage.Sound"] = params["notifications.newMessage.sound"];
    if (params["notifications.newMessage.badgeCountEnabled"] !== undefined) data["Notifications.NewMessage.BadgeCountEnabled"] = serialize.bool(params["notifications.newMessage.badgeCountEnabled"]);
    if (params["notifications.addedToChannel.enabled"] !== undefined) data["Notifications.AddedToChannel.Enabled"] = serialize.bool(params["notifications.addedToChannel.enabled"]);
    if (params["notifications.addedToChannel.template"] !== undefined) data["Notifications.AddedToChannel.Template"] = params["notifications.addedToChannel.template"];
    if (params["notifications.addedToChannel.sound"] !== undefined) data["Notifications.AddedToChannel.Sound"] = params["notifications.addedToChannel.sound"];
    if (params["notifications.removedFromChannel.enabled"] !== undefined) data["Notifications.RemovedFromChannel.Enabled"] = serialize.bool(params["notifications.removedFromChannel.enabled"]);
    if (params["notifications.removedFromChannel.template"] !== undefined) data["Notifications.RemovedFromChannel.Template"] = params["notifications.removedFromChannel.template"];
    if (params["notifications.removedFromChannel.sound"] !== undefined) data["Notifications.RemovedFromChannel.Sound"] = params["notifications.removedFromChannel.sound"];
    if (params["notifications.invitedToChannel.enabled"] !== undefined) data["Notifications.InvitedToChannel.Enabled"] = serialize.bool(params["notifications.invitedToChannel.enabled"]);
    if (params["notifications.invitedToChannel.template"] !== undefined) data["Notifications.InvitedToChannel.Template"] = params["notifications.invitedToChannel.template"];
    if (params["notifications.invitedToChannel.sound"] !== undefined) data["Notifications.InvitedToChannel.Sound"] = params["notifications.invitedToChannel.sound"];
    if (params["preWebhookUrl"] !== undefined) data["PreWebhookUrl"] = params["preWebhookUrl"];
    if (params["postWebhookUrl"] !== undefined) data["PostWebhookUrl"] = params["postWebhookUrl"];
    if (params["webhookMethod"] !== undefined) data["WebhookMethod"] = params["webhookMethod"];
    if (params["webhookFilters"] !== undefined) data["WebhookFilters"] = serialize.map(params["webhookFilters"], ((e) => e));
    if (params["limits.channelMembers"] !== undefined) data["Limits.ChannelMembers"] = params["limits.channelMembers"];
    if (params["limits.userChannels"] !== undefined) data["Limits.UserChannels"] = params["limits.userChannels"];
    if (params["media.compatibilityMessage"] !== undefined) data["Media.CompatibilityMessage"] = params["media.compatibilityMessage"];
    if (params["preWebhookRetryCount"] !== undefined) data["PreWebhookRetryCount"] = params["preWebhookRetryCount"];
    if (params["postWebhookRetryCount"] !== undefined) data["PostWebhookRetryCount"] = params["postWebhookRetryCount"];
    if (params["notifications.logEnabled"] !== undefined) data["Notifications.LogEnabled"] = serialize.bool(params["notifications.logEnabled"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new ServiceInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
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

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceResource {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  default_service_role_sid?: string | null;
  default_channel_role_sid?: string | null;
  default_channel_creator_role_sid?: string | null;
  read_status_enabled?: boolean | null;
  reachability_enabled?: boolean | null;
  typing_indicator_timeout?: number | null;
  consumption_report_interval?: number | null;
  limits?: any | null;
  pre_webhook_url?: string | null;
  post_webhook_url?: string | null;
  webhook_method?: string | null;
  webhook_filters?: Array<string> | null;
  pre_webhook_retry_count?: number | null;
  post_webhook_retry_count?: number | null;
  notifications?: any | null;
  media?: any | null;
  url?: string | null;
  links?: object | null;
}

export class ServiceInstance {
  protected _solution: ServiceContextSolution;
  protected _context?: ServiceContext;

  constructor(protected _version: V2, payload: ServicePayload, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.defaultServiceRoleSid = payload.default_service_role_sid;
    this.defaultChannelRoleSid = payload.default_channel_role_sid;
    this.defaultChannelCreatorRoleSid = payload.default_channel_creator_role_sid;
    this.readStatusEnabled = payload.read_status_enabled;
    this.reachabilityEnabled = payload.reachability_enabled;
    this.typingIndicatorTimeout = deserialize.integer(payload.typing_indicator_timeout);
    this.consumptionReportInterval = deserialize.integer(payload.consumption_report_interval);
    this.limits = payload.limits;
    this.preWebhookUrl = payload.pre_webhook_url;
    this.postWebhookUrl = payload.post_webhook_url;
    this.webhookMethod = payload.webhook_method;
    this.webhookFilters = payload.webhook_filters;
    this.preWebhookRetryCount = deserialize.integer(payload.pre_webhook_retry_count);
    this.postWebhookRetryCount = deserialize.integer(payload.post_webhook_retry_count);
    this.notifications = payload.notifications;
    this.media = payload.media;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The service role assigned to users when they are added to the service
   */
  defaultServiceRoleSid?: string | null;
  /**
   * The channel role assigned to users when they are added to a channel
   */
  defaultChannelRoleSid?: string | null;
  /**
   * The channel role assigned to a channel creator when they join a new channel
   */
  defaultChannelCreatorRoleSid?: string | null;
  /**
   * Whether the Message Consumption Horizon feature is enabled
   */
  readStatusEnabled?: boolean | null;
  /**
   * Whether the Reachability Indicator feature is enabled for this Service instance
   */
  reachabilityEnabled?: boolean | null;
  /**
   * How long in seconds to wait before assuming the user is no longer typing
   */
  typingIndicatorTimeout?: number | null;
  /**
   * DEPRECATED
   */
  consumptionReportInterval?: number | null;
  /**
   * An object that describes the limits of the service instance
   */
  limits?: any | null;
  /**
   * The webhook URL for pre-event webhooks
   */
  preWebhookUrl?: string | null;
  /**
   * The URL for post-event webhooks
   */
  postWebhookUrl?: string | null;
  /**
   * The HTTP method  to use for both PRE and POST webhooks
   */
  webhookMethod?: string | null;
  /**
   * The list of webhook events that are enabled for this Service instance
   */
  webhookFilters?: Array<string> | null;
  /**
   * Count of times webhook will be retried in case of timeout or 429/503/504 HTTP responses
   */
  preWebhookRetryCount?: number | null;
  /**
   * The number of times calls to the `post_webhook_url` will be retried
   */
  postWebhookRetryCount?: number | null;
  /**
   * The notification configuration for the Service instance
   */
  notifications?: any | null;
  /**
   * The properties of the media that the service supports
   */
  media?: any | null;
  /**
   * The absolute URL of the Service resource
   */
  url?: string | null;
  /**
   * The absolute URLs of the Service\'s Channels, Roles, and Users
   */
  links?: object | null;

  private get _proxy(): ServiceContext {
    this._context = this._context || new ServiceContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  fetch(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ServiceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
  /**
   * Update a ServiceInstance
   *
   * @param { ServiceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  update(params: ServiceContextUpdateOptions, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
  update(params?: any, callback?: any): Promise<ServiceInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the bindings.
   */
  bindings(): BindingListInstance {
    return this._proxy.bindings;
  }

  /**
   * Access the channels.
   */
  channels(): ChannelListInstance {
    return this._proxy.channels;
  }

  /**
   * Access the roles.
   */
  roles(): RoleListInstance {
    return this._proxy.roles;
  }

  /**
   * Access the users.
   */
  users(): UserListInstance {
    return this._proxy.users;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      accountSid: this.accountSid, 
      friendlyName: this.friendlyName, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      defaultServiceRoleSid: this.defaultServiceRoleSid, 
      defaultChannelRoleSid: this.defaultChannelRoleSid, 
      defaultChannelCreatorRoleSid: this.defaultChannelCreatorRoleSid, 
      readStatusEnabled: this.readStatusEnabled, 
      reachabilityEnabled: this.reachabilityEnabled, 
      typingIndicatorTimeout: this.typingIndicatorTimeout, 
      consumptionReportInterval: this.consumptionReportInterval, 
      limits: this.limits, 
      preWebhookUrl: this.preWebhookUrl, 
      postWebhookUrl: this.postWebhookUrl, 
      webhookMethod: this.webhookMethod, 
      webhookFilters: this.webhookFilters, 
      preWebhookRetryCount: this.preWebhookRetryCount, 
      postWebhookRetryCount: this.postWebhookRetryCount, 
      notifications: this.notifications, 
      media: this.media, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface ServiceListInstance {
  (sid: string): ServiceContext;
  get(sid: string): ServiceContext;


  /**
   * Create a ServiceInstance
   *
   * @param { ServiceListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ServiceInstance
   */
  create(params: ServiceListInstanceCreateOptions, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
  create(params: any, callback?: any): Promise<ServiceInstance>



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
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
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
   * @param { ServiceListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: ServiceListInstanceEachOptions, callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  getPage(params?: any, callback?: any): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ServiceListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: ServiceListInstanceOptions, callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
  list(params?: any, callback?: any): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ServiceListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: ServiceListInstancePageOptions, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  page(params?: any, callback?: any): Promise<ServicePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ServiceSolution {
}

interface ServiceListInstanceImpl extends ServiceListInstance {}
class ServiceListInstanceImpl implements ServiceListInstance {
  _version?: V2;
  _solution?: ServiceSolution;
  _uri?: string;

}

export function ServiceListInstance(version: V2): ServiceListInstance {
  const instance = ((sid) => instance.get(sid)) as ServiceListInstanceImpl;

  instance.get = function get(sid): ServiceContext {
    return new ServiceContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Services`;

  instance.create = function create(params: any, callback?: any): Promise<ServiceInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["friendlyName"] === null || params["friendlyName"] === undefined) {
      throw new Error('Required parameter "params[\'friendlyName\']" missing.');
    }

    const data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new ServiceInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<ServicePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];
    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ServicePage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<ServicePage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new ServicePage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }


  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}


export class ServicePage extends Page<V2, ServicePayload, ServiceResource, ServiceInstance> {
/**
* Initialize the ServicePage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2, response: Response<string>, solution: ServiceSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of ServiceInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: ServicePayload): ServiceInstance {
    return new ServiceInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

