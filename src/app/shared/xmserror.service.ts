import { Injectable } from '@angular/core';

@Injectable()
export class XmserrorService {

  constructor() { }

   serveraddress: string = "";
   useoffline: Boolean = false;
   lg: Object = null;
   logout: Function = null;
   appObject: Object = null;//mx.core.Application.application;

  /**
   * Registers the elang object containing all of the error strings with the
   * XMSError class.  Global errors should be common to the app as well as
   * the components.
   *
   * param elangobj The ELang object with the translated strings
   *
 */
  // public  registerLanguageFile(elangobj:ELang):void
   registerLanguageFile(): void {
    // lg=elangobj;
  }
  /**
   * Registers the application object so that events can be
   * dispatched
   *
 * @param app The application object
   *
 */
  //    public  function registerApplication(app:Application):void
  //    {
  //       appObject=app;
  //    }
  /**
   * Registers a function to call to logout in case of session expiration
   * or authentication problem.
   *
   * @param lofunc The function to call to log out of the application.
   *
 */

   registerLogout(lofunc: Function): void {
    // logout=lofunc;
  }

  /**
   * Abstraction function to just check the response code from the server.
   * NOTE:  This function assumes that any non-zero value is an error, so
   * any codes that are *not* really errors, e.g. no record present, etc,
   * need to be handled before calling this function.
   *
   * A default initializer is given for pluginid as base for any  classes
   * that need to call base level error checking, esp for cc codes (see TaskConsole).
 */
  public  checkResponseOK(errcode: number, pluginid: String = "base"): Boolean {
    //for licensing related error codes base shall not give control to plugins
    switch (errcode) {
      case XMSConstants.XMIT_LICENSE_BREACH:
      case XMSConstants.XMIT_LICENSE_CORRUPTED:
        //appObject.dispatchEvent(new XMSLicensingEvent(XMSLicensingEvent.LICENSE_BREACH, 	{title:lg.getString('STR_LICENSE_BREACHED'),	desc:lg.getString('STR_LICENSE_BREACHED_DESC'),	pluginid:pluginid	}));
        return false;
      case XMSConstants.XMIT_LICENSE_DEMO_EXPIRED:
        /* appObject.dispatchEvent(new XMSLicensingEvent(XMSLicensingEvent.LICENSE_DEMO_EXPIRED,
            {
            title:lg.getString('STR_DEMO_EXPIRED'),
            desc:lg.getString('STR_DEMO_EXPIRED_DESC'),
            pluginid:pluginid
            }
            )); */
        return false;
      case XMSConstants.XMIT_LICENSE_DEMO_SESSION_EXPIRED:
        /* appObject.dispatchEvent(new XMSLicensingEvent(XMSLicensingEvent.LICENSE_DEMO_SESSION_EXPIRED,
            {
            title:lg.getString('STR_DEMO_SESSION_EXPIRED'),
            desc:lg.getString('STR_DEMO_SESSION_EXPIRED_DESC'),
            pluginid:pluginid
            }
            )); */
        return false;
      case XMSConstants.XMIT_LICENSE_DEMO_SESSION_NOT_STARTED:
        /* appObject.dispatchEvent(new XMSLicensingEvent(XMSLicensingEvent.LICENSE_DEMO_SESSION_NOT_STARTED,
            {
            title:lg.getString('STR_DEMO_SESSION_NOT_STARTED'),
            desc:lg.getString('STR_DEMO_SESSION_NOT_STARTED_DESC'),
            pluginid:pluginid
            }
            )); */
        return false;
      case XMSConstants.XMIT_LICENSE_UNINSTALL_IN_PROGRESS:
        /* appObject.dispatchEvent(new XMSLicensingEvent(XMSLicensingEvent.LICENSE_UNINSTALL_IN_PROGRESS,
            {
            title:lg.getString('STR_INCOMPLETE_UNINSTALLATION'),
            desc:lg.getString('STR_INCOMPLETE_UNINSTALLATION_DESC'),
            pluginid:pluginid
            }
            )); */
        return false;
    }
    // for 2.0, see if code is >0xff, and if so, redirect code back to plugin handler
    if ((XMSUtils.checkPluginsSupported() == true) && (errcode > 0xff)) {
      let isError: Boolean = XMSUtils.getPluginReferencebyID(pluginid).handleErrorCode(errcode);
      return !isError;
    }
    else {
      if (isNaN(errcode as number)) {
        // MessagingWindow.out("NOTE: XMSError.checkResponseOK detected NaN as an input...please check",MessagingWindow.MWTYPE_DEBUG);
      }
      let resp: Boolean = true;
      if (errcode != XMSConstants.XMIT_SUCCESS) {
        resp = false;
        // If session expiry or authentication problem, let top level handlers know it
        if (errcode == XMSConstants.XMIT_SESSION_TIMEOUT) {
          // ExternalInterface.call('hideUploader');
          // appObject.dispatchEvent(new XMSSecurityEvent(XMSSecurityEvent.SESSIONEXPIRED));
        }
        else if (errcode == XMSConstants.XMIT_NEED_AUTHENTICATION) {
          // ExternalInterface.call('hideUploader');
          // appObject.dispatchEvent(new XMSSecurityEvent(XMSSecurityEvent.NEEDAUTHENTICATION));
        }
        else {
          // ExternalInterface.call('transparentUploader');
          // This may be temporary...but was put in place to handle situations where the gui was done
          // but the php side was not.  Its better to alert a more friendly message than "the request was invalid".
          if (errcode == XMSConstants.XMIT_INVALID_REQUEST) {
            XMSError.alertUnderConstruction();
          }
          else if (errcode != XMSConstants.XMIT_IP_IS_OFFLINE)	// do not popup offline messages
          {
            // Control here means code is coming from base
            // XMSError.alertErrorCode(errcode, pluginid, IconsDialog.imgAttentionDialog);
            XMSError.alertErrorCode(errcode, pluginid);
          }
          else {
            resp = true;	// offline does not indicate error
          }
        }
      }
      return resp;
    }
  }
  /**
   * Translates a given code into an error string.
   *
   * param code The code to translate
   * param elangobj The ELang object to
 */
   translateErrorCode(code: number, pluginid: string): string {
    /* if (lg == null) {
        // NOTE this string cannot be localized, leave it as English
        return "An error has occurred before the language strings could be loaded.  The error code is: " + code;
    }; */
    // for 2.0, see if code is >0xff, and if so, redirect code back to plugin handler
    if ((XMSUtils.checkPluginsSupported() == true) && (code > 0xff)) {
      return XMSUtils.getPluginReferencebyID(pluginid).translateErrorCode(code);
    }

    let retstr: string = "";
    switch (code) {
      //-------------------------------------//
      // Server RPC response codes
      //-------------------------------------//
      case XMSConstants.XMIT_SUCCESS:
        // retstr = lg.getString('STR_XMSERROR_SUCCE');
        break;
      // generic
      /*  case XMSConstants.XMIT_INVALID_USER:
           retstr = lg.getString('STR_XMSERROR_USERINVALID');
           break;
       case XMSConstants.XMIT_INVALID_PASSWORD:
           retstr = lg.getString('STR_XMSERROR_USERINVALID');
           break;
       case XMSConstants.XMIT_INSUFFICIENT_PRIVILEGE:
           retstr = lg.getString('STR_XMSERROR_INSUFFPRIV');
           break;
       case XMSConstants.XMIT_INVALID_REQUEST:
           retstr = lg.getString('STR_XMSERROR_THEREQUEWAS');
           break;
       case XMSConstants.XMIT_INVALID_REQUEST_DATA:
           retstr = lg.getString('STR_XMSERROR_THEDATAFOR');
           break;
       case XMSConstants.XMIT_DATABASE_ERROR:
           retstr = lg.getString('STR_XMSERROR_THEDATABHAS');
           break;
       case XMSConstants.XMIT_SESSION_TIMEOUT:
           retstr = lg.getString('STR_XMSERROR_SESSTO');
           break;
       case XMSConstants.XMIT_NEED_AUTHENTICATION:
           retstr = lg.getString('STR_XMSERROR_YOURSESSIHAS');
           break;
       case XMSConstants.XMIT_LDAP_SERVER_ERROR:
           retstr = lg.getString('STR_XMSERROR_THEREWASAN');
           break;
       case XMSConstants.XMIT_LDAP_NOT_CONFIGURED:
           retstr = lg.getString('STR_XMSERROR_THELDAPSERVE');
           break;
       case XMSConstants.XMIT_AUTH_TYPE_NOT_SUPPORTED:
           retstr = lg.getString('STR_XMSERROR_THEAUTHETYPE');
           break;
       case XMSConstants.XMIT_XMS_UPGRADE_UNABLE_TO_SAVE_IMAGE:
           retstr = lg.getString('STR_XMSERROR_THEXMSUPGRA');
           break;
       case XMSConstants.XMIT_XMS_IMAGE_NOT_FOUND:
           retstr = lg.getString('STR_XMSERROR_THEUPGRAIMAGE');
           break;
       case XMSConstants.XMIT_XMS_FAILED_TO_SET_UPGRADE:
           retstr = lg.getString('STR_XMSERROR_COULDNOTSET');
           break;
       case XMSConstants.XMIT_XMS_INVALID_TOKEN:
           retstr = lg.getString('STR_XMSERROR_INVALTOKEN');
           break;

       case XMSConstants.XMIT_XMS_REQUESTTIMEOUT:
           retstr = lg.getString('STR_XMSERROR_REQUESTTIMEOUT');
           break; */

      // device
      /*  case XMSConstants.XMIT_INVALID_DEVICE:
           retstr = lg.getString('STR_XMSERROR_INVALDEVICERROR');
           break;
       case XMSConstants.XMIT_DEVICE_ALREADY_EXISTS:
           retstr = lg.getString('STR_XMSERROR_DEVICALREAEXIST');
           break; */

      // fw update errors
      /* case XMSConstants.XMIT_FWU_UNABLE_TO_UPDATE:
          retstr = lg.getString("STR_XMSERROR_UNABLTOUPDA");
          break;
      case XMSConstants.XMIT_FWU_DEVICE_IN_UPDATE_MODE:
          retstr = lg.getString("STR_XMSERROR_TARGEISINUPDAMODE");
          break;
      case XMSConstants.XMIT_FWU_INVALID_DEVICE_MODE:
          retstr = lg.getString("STR_XMSERROR_INVALDEVI");
          break;
      case XMSConstants.XMIT_FWU_IMAGE_NOT_AVAILABLE:
          retstr = lg.getString("STR_XMSERROR_UPDATIMAGISNOTAVAI");
          break;
      case XMSConstants.XMIT_FWU_STATUS_NOT_AVAILABLE:
          retstr = lg.getString("STR_XMSERROR_UPDATSTATISNOTAVAI");
          break;
      case XMSConstants.XMIT_FWU_UNABLE_TO_SAVE_IMAGE:
          retstr = lg.getString("STR_XMSERROR_UNABLTOSAVEUPDAIMAG");
          break;
      case XMSConstants.XMIT_FWU_INVALID_IMAGE:
          retstr = lg.getString("STR_XMSERROR_INVALUPDAIMAG");
          break;

      case XMSConstants.XMIT_STATUS_NO_EVENTS_FOUND:
          retstr = lg.getString('STR_XMSERROR_NOEVENWEREFOUN');
          break;
      case XMSConstants.XMIT_STATUS_UNKNOWN:
          retstr = lg.getString('STR_XMSERROR_STATISUNKN');
          break; */

      // RPC user
      /* case XMSConstants.XMIT_USER_DOES_NOT_EXIST:
          retstr = lg.getString('STR_XMSERROR_USERNOTEXIST');
          break;
      case XMSConstants.XMIT_USER_ALREADY_EXISTS:
          retstr = lg.getString('STR_XMSERROR_THEUSERALREA');
          break;
      case XMSConstants.XMIT_USER_DISABLED:
          retstr = lg.getString('STR_XMSERROR_USERDISABLED');
          break;
      case XMSConstants.XMIT_LAST_ADMIN_USER:
          retstr = lg.getString('STR_XMSERROR_YOUCANNDELETHELASTUSER');
          break; */
      // 0x30
      // user defined groups.  Any errors from user group operations means that
      // the UI may be out of sync with the DB due to another session messing around
      // it at the same time for the same user.  In all cases, this requires the UI
      // to force a devicelist refresh.  However there are some cases where the errors
      // can be ignored, like when ignoring a device and blindly attempting to delete
      // it from the user groups whether it exists there or not.
      /*  case XMSConstants.XMIT_NODE_NOT_FOUND:
           retstr = lg.getString("STR_XMSERROR_THETARGNODEWASNOTFOUN");
           break;
       case XMSConstants.XMIT_PARENT_NOT_FOUND:
           retstr = lg.getString("STR_XMSERROR_THETARGNODEWASNOTFOUN");
           break;
       case XMSConstants.XMIT_GROUP_ALREADY_EXISTS:
           retstr = lg.getString("STR_XMSERROR_THEGROUALREEXISTHE");
           break;

       case XMSConstants.XMIT_RECIPIENT_ALREADY_EXISTS:
           retstr = lg.getString("STR_XMSERROR_RECIPIENT_ALREADY_EXISTS");
           break; */

      // configs
      /* case XMSConstants.XMIT_NO_CONFIGS_FOUND:
          retstr = lg.getString('STR_XMSERROR_NOCONFINFOFOUN');
          break;
      case XMSConstants.XMIT_SERVER_NOT_CONFIGURED_FOR_SSL:
          retstr = lg.getString('STR_XMSERROR_THESERVISNOTCONFFOR');
          break;

      case XMSConstants.XMIT_UPLOAD_FILE_READ_ERROR:
          retstr = lg.getString('STR_XMSERROR_THERWASANUPLOFILEREAD');
          break;
      case XMSConstants.XMIT_INVALID_CERTIFICATE_FILE:
          retstr = lg.getString('STR_XMSERROR_INVACERTFILE');
          break;
      case XMSConstants.XMIT_SERVERPORT_NOT_AVAILABLE:
          retstr = lg.getString('STR_XMSERROR_PORTNOTAVAILABLE');
          break; 


      case XMSConstants.XMIT_VERSION_UNKNOWN:
          retstr = lg.getString('STR_XMSERROR_THEVERSNUMBISUNKN');
          break;

      case XMSConstants.XMIT_DB_SIZE_NOT_CONFIGURED:
          retstr = lg.getString('STR_XMSERROR_THEDATASIZEISNOTCONF');
          break;
      case XMSConstants.XMIT_INVALID_FILE_EXT:
          retstr = lg.getString('STR_XMSERROR_INVALID_FILE_EXT');
          break;
      case XMSConstants.XMIT_UNABLE_TO_CHANGE_PORT_SETTINGS:
          retstr = lg.getString('STR_XMSERROR_XMIT_UNABLE_TO_CHANGE_PORT_SETTINGS');
          break;


      case XMSConstants.XMIT_EMAILSERVER_NOTCONFIGURED:
          retstr = lg.getString('STR_XMSERROR_EMAILSERVER_NOTCONFIGURED');
          break;

      case XMSConstants.XMIT_SMTPSERVER_CREDENTIALSFAILED:
          retstr = lg.getString('STR_XMSERROR_XMIT_SMTPSERVER_CREDENTIALSFAILED');
          break;


      case XMSConstants.XMIT_TESTEMAIL_FAILURE:
          retstr = lg.getString('STR_XMSERROR_XMIT_TESTEMAIL_FAILURE');
          break;

      case XMSConstants.XMIT_EVT_GATEWAY_NOT_RUNNING:
          retstr = lg.getString('STR_XMSERROR_XMIT_EVT_GATEWAY_NOT_RUNNING');
          break;
      case XMSConstants.XMIT_EVT_GATEWAY_COMM_ERROR:
          retstr = lg.getString('STR_XMSERROR_XMIT_EVT_GATEWAY_COMM_ERROR');
          break;
      case XMSConstants.XMIT_FAILED_TO_UPDATE_SCHEDULES:
          retstr = lg.getString('STR_XMSERROR_XMIT_FAILED_TO_UPDATE_SCHEDULES');
          break;
      case XMSConstants.XMIT_NO_SERVER_CREDENTIALS:
          retstr = lg.getString('STR_XMSERROR_XMIT_NO_SERVER_CREDENTIALS');
          break;
      case XMSConstants.XMIT_RDCB_NOT_AVAILABLE:
          retstr = lg.getString('STR_XMSERROR_XMIT_RDCB_NOT_AVAILABLE');
          break;
      case XMSConstants.XMIT_SAME_TASK_INPROGRESS:
          retstr = lg.getString('STR_XMSERROR_XMIT_SAME_TASK_INPROGRESS');
          break;
      case XMSConstants.XMIT_DEVICEISNOT_ACTIVENODE:
          retstr = lg.getString('STR_XMSERROR_XMIT_DEVICEISNOT_ACTIVENODE');
          break;
      case XMSConstants.XMIT_SCHEDULE_SAMEDEVEXISTS:
          retstr = lg.getString('STR_XMSERROR_XMIT_SCHEDULE_SAMEDEVEXISTS');
          break;
      // error
      case XMSConstants.XMIT_AUTHENTICATION_FAILURE:
          retstr = lg.getString('STR_XMSERROR_AUTHENTICATION_FAILURE');
          break;
      case XMSConstants.XMIT_TERM_SIGNAL_FAILED:
          retstr = lg.getString('STR_XMSERROR_TERMSIGNALDNSFAIL');
          break;
      case XMSConstants.XMIT_NO_RESPONSE:
          retstr = lg.getString('STR_XMSERROR_NO_RESPONSE');
          break;


      case XMSConstants.XMIT_UNDEFINED_OPERATION:
          retstr = lg.getString('STR_XMSERROR_UNDEOPER');
          break;
      case XMSConstants.XMIT_UNKNOWN_ERROR:
          retstr = lg.getString('STR_XMSERROR_ANUNKNERRO');
          break;

      // dev status from gettaskresults if device is still running task
      case XMSConstants.XMIT_INVALID_USER_ACTION:
          retstr = lg.getString('STR_XMSERROR_INVALID_USER_ACTION');
          break;
      //-------------------------------------//
      // Validation errors
      //-------------------------------------//
      case XMSConstants.VALIDATION_NOERROR:
          retstr = "";
          break;
      case XMSConstants.VALIDATION_FIELD_REQUIRED:
          retstr = lg.getString('STR_XMSERROR_AREQUFIELISMISS');
          break;
      // Usernames
      case XMSConstants.VALIDATION_USERNAME_MISSING:
          retstr = lg.getString('STR_XMSERROR_THEUSERNAMEMISS');
          break;
      case XMSConstants.VALIDATION_USERNAME_INVALID:
          retstr = lg.getString('STR_XMSERROR_THEUSERNAMEINV');
          break;
      case XMSConstants.VALIDATION_USERNAME_SIZE_XMS:
          retstr = lg.getString('STR_XMSERROR_THEXMSUSERNAMEISNOTWITH');
          break;
      case XMSConstants.VALIDATION_USERNAME_SIZE_IPMI:
          retstr = lg.getString('STR_XMSERROR_THEIPMIUSERNAMEISNOTWITH');
          break;
      case XMSConstants.VALIDATION_USERNAME_CHARS:
          retstr = lg.getString('STR_XMSERROR_THEUSERNAMECONTINVACHAR');
          break;

      // Passwords
      case XMSConstants.VALIDATION_PASSWORD_MISSING:
          retstr = lg.getString('STR_XMSERROR_THEPASSWISMISS');
          break;
      case XMSConstants.VALIDATION_PASSWORD_INVALID:
          retstr = lg.getString('STR_XMSERROR_THEPASSWISINV');
          break;
      case XMSConstants.VALIDATION_PASSWORD_SIZE:
          retstr = lg.getString('STR_XMSERROR_THEPASSISNOTTHECORR');
          break;
      case XMSConstants.VALIDATION_PASSWORD_SIZE_XMS:
          retstr = lg.getString('STR_XMSERROR_THEXMSPASSISNOTWITH');
          break;
      case XMSConstants.VALIDATION_PASSWORD_SIZE_IPMI:
          retstr = lg.getString('STR_XMSERROR_THEIPMIPASSISNOTWITH');
          break;
      case XMSConstants.VALIDATION_PASSWORD_CHARS:
          retstr = lg.getString('STR_XMSERROR_THEPASSCONTINVACHAR');
          break;
      // Domain
      case XMSConstants.VALIDATION_DOMAIN_MISSING:
          retstr = lg.getString('STR_XMSERROR_THEDOMAINAMEMISS');
          break;
      case XMSConstants.VALIDATION_DOMAIN_CHARS:
          retstr = lg.getString('STR_XMSERROR_THEDOMANAMECONTINVACHAR');
          break;
      case XMSConstants.VALIDATION_DOMAIN_INVALID:
          retstr = lg.getString('STR_XMSERROR_THEDOMAINAMEINV');
          break;

      //IP
      case XMSConstants.VALIDATION_IP_INVALID:
          retstr = lg.getString('STR_XMSERROR_THEIPADDRISINVA');
          break;

      //MAC
      case XMSConstants.VALIDATION_MAC_INVALID:
          retstr = lg.getString('STR_XMSERROR_THEMACADDRISINVA')
          break;

      //EMAIL - covers strings defined by Flex email validator
      case XMSConstants.VALIDATION_EMAIL_MISSINGAT:
          retstr = lg.getString('STR_XMSERROR_ANATSIGNISMISS');
          break;
      case XMSConstants.VALIDATION_EMAIL_TOOMANYAT:
          retstr = lg.getString('STR_XMSERROR_YOUREMAADDRCONTTOOMANY');
          break;
      case XMSConstants.VALIDATION_EMAIL_MISSINGUSER:
          retstr = lg.getString('STR_XMSERROR_THEUSERINYOUREMAADDR');
          break;
      case XMSConstants.VALIDATION_EMAIL_INVCHAR:
          retstr = lg.getString('STR_XMSERROR_YOUREMAADDRCONTINVACHAR');
          break;
      case XMSConstants.VALIDATION_EMAIL_INVIPDOMAIN:
          retstr = lg.getString('STR_XMSERROR_THEIPDOMAINYOUREMA');
          break;
      case XMSConstants.VALIDATION_EMAIL_MISSINGPERINDOMAIN:
          retstr = lg.getString('STR_XMSERROR_THEDOMAINYOUREMAADDRMISS');
          break;
      case XMSConstants.VALIDATION_EMAIL_INVALIDDOMAIN:
          retstr = lg.getString('STR_XMSERROR_THEDOMAINYOUREMAADDRINCO');
          break;
      case XMSConstants.VALIDATION_EMAIL_INVALIDPERIODSINDOMAIN:
          retstr = lg.getString('STR_XMSERROR_THEDOMAINYOUREMAADDRCONS');
          break;

      // SSL
      case XMSConstants.INVALID_SSL_FILES:
          retstr = lg.getString('STR_XMSERROR_INVALIDSSLFILES');
          break;*/

      //-------------------------------------//
      // License
      //-------------------------------------//
      /*case XMSConstants.XMIT_LICENSE_EXHAUSTION:
          retstr = lg.getString('STR_XMSERROR_LICENSEEXHAUSTED');
          break;

      case XMSConstants.XMIT_LICENSE_ALREADY_ACTIVATED:
          retstr = lg.getString('STR_LICENSE_ALREADY_ACTIVATED');
          break;
      case XMSConstants.XMIT_LICENSE_SERVER_COMMUNICATION_FAILED:
          retstr = lg.getString('STR_SERVER_COMMUNICATION_FAILED');
          break;

      // IP
      case XMSConstants.XMIT_IP_IS_IGNORED:
          retstr = lg.getString('STR_XMSERROR_XMIT_IP_IS_IGNORED');
          break;

      // OFFLINE
      case XMSConstants.XMIT_IP_IS_OFFLINE:
          retstr = lg.getString('STR_XMSERROR_XMIT_IP_IS_OFFLINE');
          break;
      case XMSConstants.XMIT_IP_CANNOT_BE_REACHED:
          retstr = lg.getString('STR_XMSERROR_XMIT_IP_CANNOT_BE_REACHED');
          break;
      case XMSConstants.XMIT_IP_IS_BUSY:
          retstr = lg.getString('STR_XMSERROR_XMIT_IP_IS_BUSY');
          break;

      // TASKS

      // dev status from gettaskresults if device is still running task
      case XMSConstants.XMIT_TASK_INPROGRESS:
          retstr = lg.getString('STR_XMSERROR_TASK_IN_PROGRESS');
          break;



      // WOL

      case XMSConstants.XMIT_DEVICE_NOT_IN_SLEEP_STATE:
          retstr = lg.getString('STR_XMSERROR_XMIT_DEVICE_NOT_IN_SLEEP_STATE');
          break;
      case XMSConstants.XMIT_DEVICE_INFO_NOT_AVAILABLE:
          retstr = lg.getString('STR_XMSERROR_XMIT_DEVICE_INFO_NOT_AVAILABLE');
          break;
      case XMSConstants.XMIT_UNABLE_TO_SEND_WOL_COMMAND:
          retstr = lg.getString('STR_XMSERROR_UNABLE_TO_SEND_WOL_COMMAND');
          break;



      // LDAP
      case XMSConstants.XMIT_LDAP_SERVER_CONNECTION_ERROR:
          retstr = lg.getString('STR_XMSERROR_XMIT_LDAP_SERVER_CONNECTION_ERROR');
          break;
      case XMSConstants.XMIT_LDAP_SERVER_BIND_ERROR:
          retstr = lg.getString('STR_XMSERROR_XMIT_LDAP_SERVER_BIND_ERROR');
          break;
      case XMSConstants.XMIT_LDAP_SERVER_SEARCH_ERROR:
          retstr = lg.getString('STR_XMSERROR_XMIT_LDAP_SERVER_SEARCH_ERROR');
          break;
      // Adding in all other licensing strings.  This must be done for
      // callers that do not directly call checkResponseOK, but instead
      // check the response directly and call this function to translate
      // the error codes.  For now, I am going to make the same
      // event calls as the checkResponseOK function, but return
      // the main title string as the return value.

      case XMSConstants.XMIT_LICENSE_BREACH:
      case XMSConstants.XMIT_LICENSE_CORRUPTED:
          retstr = lg.getString('STR_LICENSE_BREACHED');	// return the normal string for caller
          checkResponseOK(code, pluginid);
          break;
      case XMSConstants.XMIT_LICENSE_DEMO_EXPIRED:
          retstr = lg.getString('STR_DEMO_EXPIRED');
          checkResponseOK(code, pluginid);
          break;
      case XMSConstants.XMIT_LICENSE_DEMO_SESSION_EXPIRED:
          checkResponseOK(code, pluginid);
          retstr = lg.getString('STR_DEMO_SESSION_EXPIRED');
          break;
      case XMSConstants.XMIT_LICENSE_DEMO_SESSION_NOT_STARTED:
          checkResponseOK(code, pluginid);
          retstr = lg.getString('STR_DEMO_SESSION_NOT_STARTED');
          break;
      case XMSConstants.XMIT_LICENSE_HD_ID_NOT_UPDATED:
          checkResponseOK(code, pluginid);
          retstr = lg.getString('STR_GATHERING_INFO_TRYLATER');
          break;
      case XMSConstants.XMIT_LICENSE_UNINSTALL_IN_PROGRESS:
          checkResponseOK(code, pluginid);
          retstr = lg.getString('STR_INCOMPLETE_UNINSTALLATION');
          break;
      // I doubt these are necessary at a global level, but I am including them here
      // for consistency - BB
      case XMSConstants.XMIT_LICENSE_ALREADY_ACTIVATED:
          retstr = lg.getString('STR_LICENSE_ALREADY_ACTIVATED');
          break;
      case XMSConstants.XMIT_LICENSE_ACTIVATION_FAILED:
          retstr = lg.getString('STR_LICENSE_ACTIVATION_FAILED');
          break;
      case XMSConstants.XMIT_LICENSE_ACTIVATE_THRU_MAIL:
          retstr = lg.getString('STR_LICENSE_ACTIVATE_THRU_MAIL');
          break;*/



      default:
        retstr = "EMPTY STRING";// lg.getString('STR_XMSERROR_UNKNOWN') + "[" + XMSUtils.getHex(code) + "]";
        break;
    }
    return retstr;
  }

   translateValidationCode(code: string): string {
    if (XMSError.lg == null) {
      // NOTE this string cannot be localized, leave it as English
      return "An error has occurred before the language strings could be loaded.  The error code is: " + code;
    };
    let retstr: string = "";
    switch (code) {
      //-------------------------------------//
      // Validation errors
      //-------------------------------------//
      case XMSConstants.VALIDATION_NOERROR:
        retstr = "";
        break;
      /* case XMSConstants.VALIDATION_FIELD_REQUIRED:
          retstr = lg.getString('STR_XMSERROR_AREQUFIELISMISS');
          break;
      // Usernames
      case XMSConstants.VALIDATION_USERNAME_MISSING:
          retstr = lg.getString('STR_XMSERROR_THEUSERNAMEMISS');
          break;
      case XMSConstants.VALIDATION_USERNAME_INVALID:
          retstr = lg.getString('STR_XMSERROR_THEUSERNAMEINV');
          break;
      case XMSConstants.VALIDATION_USERNAME_SIZE_XMS:
          retstr = lg.getString('STR_XMSERROR_THEXMSUSERNAMEISNOTWITH');
          break;
      case XMSConstants.VALIDATION_USERNAME_SIZE_IPMI:
          retstr = lg.getString('STR_XMSERROR_THEIPMIUSERNAMEISNOTWITH');
          break;
      case XMSConstants.VALIDATION_USERNAME_CHARS:
          retstr = lg.getString('STR_XMSERROR_THEUSERNAMECONTINVACHAR');
          break;

      // Passwords
      case XMSConstants.VALIDATION_PASSWORD_MISSING:
          retstr = lg.getString('STR_XMSERROR_THEPASSWISMISS');
          break;
      case XMSConstants.VALIDATION_PASSWORD_INVALID:
          retstr = lg.getString('STR_XMSERROR_THEPASSWISINV');
          break;
      case XMSConstants.VALIDATION_PASSWORD_SIZE:
          retstr = lg.getString('STR_XMSERROR_THEPASSISNOTTHECORR');
          break;
      case XMSConstants.VALIDATION_PASSWORD_SIZE_XMS:
          retstr = lg.getString('STR_XMSERROR_THEXMSPASSISNOTWITH');
          break;
      case XMSConstants.VALIDATION_PASSWORD_SIZE_IPMI:
          retstr = lg.getString('STR_XMSERROR_THEIPMIPASSISNOTWITH');
          break;
      case XMSConstants.VALIDATION_PASSWORD_CHARS:
          retstr = lg.getString('STR_XMSERROR_THEPASSCONTINVACHAR');
          break;
      // Domain
      case XMSConstants.VALIDATION_DOMAIN_MISSING:
          retstr = lg.getString('STR_XMSERROR_THEDOMAINAMEMISS');
          break;
      case XMSConstants.VALIDATION_DOMAIN_LEN:
          retstr = lg.getString('STR_XMSERROR_THEDOMANAMEINVALIDLEN');
          break;
      case XMSConstants.VALIDATION_DOMAIN_EXT:
          retstr = lg.getString('STR_XMSERROR_THEDOMANAMEINVALIDEXT');
          break;
      case XMSConstants.VALIDATION_DOMAIN_CHARS:
          retstr = lg.getString('STR_XMSERROR_THEDOMANAMECONTINVACHAR');
          break;
      case XMSConstants.VALIDATION_DOMAIN_INVALID:
          retstr = lg.getString('STR_XMSERROR_THEDOMAINAMEINV');
          break;

      //IP
      case XMSConstants.VALIDATION_IP_INVALID:
          retstr = lg.getString('STR_XMSERROR_THEIPADDRISINVA');
          break;

      //MAC
      case XMSConstants.VALIDATION_MAC_INVALID:
          retstr = lg.getString('STR_XMSERROR_THEMACADDRISINVA')
          break;

      //EMAIL - covers strings defined by Flex email validator
      case XMSConstants.VALIDATION_EMAIL_MISSINGAT:
          retstr = lg.getString('STR_XMSERROR_ANATSIGNISMISS');
          break;
      case XMSConstants.VALIDATION_EMAIL_TOOMANYAT:
          retstr = lg.getString('STR_XMSERROR_YOUREMAADDRCONTTOOMANY');
          break;
      case XMSConstants.VALIDATION_EMAIL_MISSINGUSER:
          retstr = lg.getString('STR_XMSERROR_THEUSERINYOUREMAADDR');
          break;
      case XMSConstants.VALIDATION_EMAIL_INVCHAR:
          retstr = lg.getString('STR_XMSERROR_YOUREMAADDRCONTINVACHAR');
          break;
      case XMSConstants.VALIDATION_EMAIL_INVIPDOMAIN:
          retstr = lg.getString('STR_XMSERROR_THEIPDOMAINYOUREMA');
          break;
      case XMSConstants.VALIDATION_EMAIL_MISSINGPERINDOMAIN:
          retstr = lg.getString('STR_XMSERROR_THEDOMAINYOUREMAADDRMISS');
          break;
      case XMSConstants.VALIDATION_EMAIL_INVALIDDOMAIN:
          retstr = lg.getString('STR_XMSERROR_THEDOMAINYOUREMAADDRINCO');
          break;
      case XMSConstants.VALIDATION_EMAIL_INVALIDPERIODSINDOMAIN:
          retstr = lg.getString('STR_XMSERROR_THEDOMAINYOUREMAADDRCONS');
          break; */
      default:
        retstr = "UNKNONW ERROR";//lg.getString('STR_XMSERROR_UNKNOWN') + "[" + code + "]";
        break;
    }
    return retstr;
  }

  // This is a dirty trick.
  // Go ahead and output the normal msg to the Alert control to make it format
  // and size properly.  Then use the internal namespace for the control to set
  // the htmltext to the same msg.  It will overwrite the plain text with html
  // formatted text. :)
   alertErrorCode(code: number, pluginid: String, icon: any = null): any {
    /* let st: String = XMSError.translateErrorCode(code, pluginid);
    let a: Alert;
    a = Alert.show(st,
        null,
        mx.controls.Alert.OK,
        null,
        null,
        icon
    );
    a.mx_internal:: alertForm.mx_internal:: textField.htmlText = st; 

    return a;*/
    return this.alertErrorMessagewithTitle("alertErrorCode", "error");
  }
   alertErrorMessage(msg: String, icon: any = null): any {
    /* let a: Alert;
    a = Alert.show(msg,
        null,
        mx.controls.Alert.OK,
        null,
        null,
        icon
    );
    a.mx_internal:: alertForm.mx_internal:: textField.htmlText = msg;
    a.height += 10;
    return a; */
    return this.alertErrorMessagewithTitle("alertErrorMessage", "error");
  }

  //------------------------------------------------------//
  // HTML abstraction alerts that use the above....
  //------------------------------------------------------//

  // Generic error messages with a bold "Error" title, followed by the string.
   alertGenericError(msg: String): any {
    // return XMSError.alertErrorMessagewithTitle(lg.getString("STR_XMSERROR_ERRO"), msg);
    return this.alertErrorMessagewithTitle("alertGenericError", "error");
  }

  //------------------------------------------------------//
  //------------------------------------------------------//
   alertUnderConstruction(msg: String = ""): any {
    /* return alertErrorMessagewithTitle(lg.getString("STR_XMSERROR_UNDECONS"),
        lg.getString("STR_XMSERROR_THISFEATISSTILBEINDEVE") + msg,
        IconsDialog.imgUnderConstruction); */
    return this.alertErrorMessagewithTitle("new", "error");
  }

   alertGenericResult(msg: String = "", title: String = ""): any {
    // this looks too strange, let the user choose the title
    //			alertErrorMessagewithTitle(lg.getString("STR_XMSERROR_OPERRESU")+"...",
    /*  return alertErrorMessagewithTitle(title,
         msg,
         IconsDialog.imgInformationDialog); */
    return this.alertErrorMessagewithTitle("new", "error");
  }

   alertGenericAttention(msg: String = "", title: String = ""): any {
    /*  return alertErrorMessagewithTitle(title,
         msg,
         IconsDialog.imgAttentionDialog); */
    return this.alertErrorMessagewithTitle("new", "success");
  }

  //------------------------------------------------------//
  // Generic success messages with a bold "Success!" title, followed by the string.
  //------------------------------------------------------//
   alertGenericSuccess(msg: String): any {
    /* return alertErrorMessagewithTitle(lg.getString("STR_XMSERROR_SUCCE"),
        msg,
        IconsDialog.imgSuccessDialog); */
    return this.alertErrorMessagewithTitle("new", "success");
  }
  //------------------------------------------------------//
  // Generic error messages with a bold user-specific title,
  // followed by the string and using specified icon.
  // Default icon is error.
  //------------------------------------------------------//
   alertErrorMessagewithTitle(title: String, msg: String, icon: any = null): any {
    /* if (icon == null) {
        icon = IconsDialog.imgErrorDialog;
    }

    msg = (title != "" ? "<b>" + title + "</b>\n\n" : "") + msg;	// use \n instead of <br/> so control will measure properly when assigning to text
    return (alertErrorMessage(msg, icon)); */
    return this.alertErrorMessagewithTitle("new", "error");
  }

}
