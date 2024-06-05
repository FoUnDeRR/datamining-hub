/**
* Types decleration file for discord client functions.
* Made by @gh/FoUnDeRR & @gh/happyendermangit
* each module is typed onto it's own interface.
**/

/** find module exports with props */
declare function findByProps(...props: string[]): any;
/** find module exports with props but doesn't return only the first one that is found. */
declare function findByPropsAll(...props: string[]): any[];
/** find a chunk id by a code */
declare function findModuleId(...codes): string | null;
/** find a store by it's name */
declare function findStore(name: string): any;
/** find a function by a code */
declare function findByCode(...codes): Function | null;
/** load a chunk by id */
declare function wreq(id: string | number): any;

interface TokenModule {
 /** Get's the current discord token **/
 getToken(): string;
 /** Set's the discord client token on localStorage **/
 setToken(token: string): void 
}

// @todo add all flux events
type FluxEvents = "MESSAGE_CREATE" | "MESSAGE_DELETE" | string;

interface FluxEvent {
  type: FluxEvents;
  [key: string]: any;
}

interface FluxSubscripbtion {
  type: FluxEvents;
  action: FluxHandler;
}

type FluxHandler = (event: FluxEvent) => any;

interface FluxModule {
  /** fires an event */
  dispatch(event: FluxEvent): boolean | void;
  /** fires an event */
  _dispatch(event: FluxEvent): boolean | void;
  /** add an interceptor that recieved the fired events */
  addInterceptor(handler: FluxHandler): any;
  _subscribptions: FluxSubscripbtion[];
}

interface MessagesModule {
  /** send a message to a channel */
  sendMessage(channelId, messageData, ...args): any 
 // @todo add other functions
  [key: string]: any 
}
