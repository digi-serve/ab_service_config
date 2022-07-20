/*
 * user_manager
 */
module.exports = {
   /*************************************************************************/
   /* enable: {bool} is this service active?                                */
   /*************************************************************************/
   enable: false,

   /*************************************************************************/
   /* maxFailedLogins: {integer} how many failed logins before rejecting    */
   /*                  any more login attempts                              */
   /*************************************************************************/
   maxFailedLogins: 5,
};
