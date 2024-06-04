/**
* Types decleration file for discord client functions.
* Made by @gh/FoUnDeRR & @gh/happyendermangit
* each module is typed onto it's own interface.
**/

interface TokenModule {
 /** Get's the current discord token **/
 getToken(): string;
 /** Set's the discord client token on localStorage **/
 setToken(token: string): void 
}
