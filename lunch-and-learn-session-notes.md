# Lunch and Learn notes

## Pipes
Pure pipes detect value changes of 
* string, number, boolean, symbol

 or object references of
 * Date, Array, Function, Object

They'll ignore changes of the properties of complex object.

#Forms:
valueChanges is called on children

#DI
The @Optional decorator tells Angular to continue when it can't find the dependency. Angular sets the injection parameter to null instead.
@Inject(Token) for non classes dependencies