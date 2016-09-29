//local only collection (to current user only!)
Errors = new Mongo.Collection(null);

throwError = function(message) {
  Errors.insert({message: message});
};
