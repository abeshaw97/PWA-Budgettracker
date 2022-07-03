/* create variable for db connection */
let db;

/* connection to budget db and set it to version 1 */
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function (event) {
  /* save reference to db */
  db = event.target.result;

  /* create object store named "new_transaction" y */
  db.createObjectStore("new_transaction", { autoIncrement: true });
};
/* successful event */
request.onsuccess = function (event) {
  db = event.target.result;

  /* check if app is online */
  if (navigator.onLine) {
    uploadTransactions(db);
  }
};