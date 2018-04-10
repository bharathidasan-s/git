//;*****************************************************************;
//;*****************************************************************;
//;**                                                             **;
//;**     (C) COPYRIGHT American Megatrends Inc. 2008-2010        **;
//;**                     ALL RIGHTS RESERVED                     **;
//;**                                                             **;
//;**  This computer software, including display screens and      **;
//;**  all related materials, are confidential and the            **;
//;**  exclusive property of American Megatrends, Inc.  They      **;
//;**  are available for limited use, but only pursuant to        **;
//;**  a written license agreement distributed with this          **;
//;**  computer software.  This computer software, including      **;
//;**  display screens and all related materials, shall not be    **;
//;**  copied, reproduced, published or distributed, in whole     **;
//;**  or in part, in any medium, by any means, for any           **;
//;**  purpose without the express written consent of American    **;
//;**  Megatrends, Inc.                                           **;
//;**                                                             **;
//;**                                                             **;
//;**                American Megatrends, Inc.                    **;
//;**           5555 Oakbook Parkway, Building 200        	      **;
//;**     Norcross,  Georgia - 30071, USA. Phone-(770)-246-8600.  **;
//;**                                                             **;
//;*****************************************************************;
//;*****************************************************************;
// app.as
// activatePage( pageName:String):void
// activateView(devtype:int, pluginid:String, pageIcon:Class, force:Boolean=false):void
// appInitGUIState():void
// appInitLangState():void
// appInitLoginState():void
// appkeydown(event:KeyboardEvent):void
// bringbackTree():void
// closeAllPopups():void
// csserror(event:StyleEvent):void
// deviceChangeHandler(dummy:*):void
// disablePluginAccess(text:String, description:String):void
// downloadLogs():void
// dumpDevList():void
// dumpMenuList():void
// dumpSettings():void
// dumpUGNodes():void
// easterEgg():void
// enablePluginAccess():void
// fixMenus():void
// flexShutDownHandler():void
// getCustomSettingsResp(event:ResultEvent):void
// getDefaultSettingsResp(event:ResultEvent):void
// getSelectedDevicesString():String
// handleExternalTabKey(name:String):void
// handleSMStop():void
// handleTopMenuEvent(data:String):void
// headerMouseOver(event:Event):void
// headerPushPin(event:Event):void
// initApp():void
// initCookies():void
// initGUIState():void
// iteratePermissions(sourcenode:XML):void
// iterateViewname(sourcenode:XML, pluginviewid:String=AppConstants.PLUGINID):void
// loadCookieSettings():void
// menuChange(event:MenuEvent):void
// oemhack(menus:XML):void
// preInitApp():void
// respGetInfo(event:ResultEvent):void
// respGetInfoFault(event:FaultEvent):void
// returnWidth():int
// setStatusBarMessage(message:String, color:int=XMSConstants.STATUSTEXT_SUCCESS, icon:Class=null):void
// setToolTipforSelectedDeviceArea():void
// setupCookies():void
// setupOEMAssets():void
// setupSettings(result:XML):void
// showHelp(viewname:String, pluginid:String):void
// showUpload(dto:Object):void
// stopSMListener(eventObj:CloseEvent):void
// tempfunc():void
// topmenubarItemClick(event:MenuEvent):void
// treeEffectEnd():void
// treeMouseOut(event:Event):void
// treeMouseOver(event:Event):void
// treePushPin(event:Event):void

//
//
// Main application support file
//
//----------------------------------------------------------------------------//
// INCLUDE
//----------------------------------------------------------------------------//

// include "language.as";		// for app init and language setup
// include "loginsession.as";	// for handling login state stuff


// include "external.as";			// for any JS/HTML stuff
// include "messagingsystem.as";
// include "processplugins.as";			// to handle the plugins

//----------------------------------------------------------------------------//
// IMPORTS
//----------------------------------------------------------------------------//
/*
import com.ami.GUISE.Comm.Xmit;
import com.ami.Graphics.*;
import com.ami.projects.Common.*;
import com.ami.projects.XMS.*;
import com.ami.projects.XMS.XMSEvents.*;
import com.misc.HTMLTooltip;

import flash.events.*;

import mx.charts.renderers.WedgeItemRenderer;
import mx.controls.*;
import mx.core.Application;
import mx.core.IFlexDisplayObject;
import mx.events.MenuEvent;
import mx.events.StyleEvent;
import mx.managers.CursorManager;
import mx.managers.PopUpManager;
import mx.managers.ToolTipManager;
import mx.rpc.events.*; */
//----------------------------------------------------------------------------//
// VARS
//----------------------------------------------------------------------------//

let GData:XMSData=new XMSData();
let appStrings:Array<any>;
/*[Bindable] internal var boolTreePin:Boolean=true;
[Bindable] internal var boolHeaderPin:Boolean=true;
[Bindable] internal var hostname:String="";

[Bindable] public var mwWindowEnabled:Boolean=false;
[Bindable] public var mwWindowOutDebug:Boolean=false;
[Bindable] public var mwWindowOutGUI:Boolean=false;
[Bindable] public var mwWindowOutSocket:Boolean=false;
[Bindable] public var mwWindowSize:int=200;
[Bindable] public var sdtoolTipText:String="";

[Bindable] public var intDatabaseCapacity:int=0;

internal var boolTipShown:Boolean=false;
[Bindable] public var isEvalOver:Boolean=false;//do not show welcome dialog when evaluation period got over 
internal var boolDeviceListInitialized:Boolean=false;		// indicator to tell me the device list comp has instantiated

public var helpWin:IFlexDisplayObject;
private var wedgeIR:WedgeItemRenderer;		// A dummy var to share class among plugins for pie charts
private var switchServer:IFlexDisplayObject;
[Bindable] public var svmList:XML= new XML(); 
 
//[Embed(source="../assets/Graphics/mainmenu_tools.png")]
public var imgMMTools:Class=IconsButtonLabel.imgTools;
//[Embed(source="../assets/Graphics/mainmenu_options.png")]
public var imgMMOptions:Class=IconsButtonLabel.imgOptions;
[Embed(source="../assets/Graphics/mainmenu_plugins.png")]
public var imgMMPlugins:Class;
[Embed(source="../assets/Graphics/mainmenu_about.png")]
public var imgMMAbout:Class;

//[Embed(source="../assets/Graphics/mainmenu_actions.png")]
[Embed(source="../assets/Graphics/mainmenu_tools.png")]
public var imgMMActions:Class;

[Embed(source="../assets/Graphics/navbuttons_start.png")]
[Bindable] public static var bgButtonStart:Class;

[Embed(source="../assets/Graphics/navbuttons_button_selected.png")]
[Bindable] public static var bgButtonSelected:Class;

[Embed(source="../assets/Graphics/navbuttons_button_hover.png")]
[Bindable] public static var bgButtonHover:Class;

[Embed(source="../assets/Graphics/navbuttons_button_normal.png")]
[Bindable] public static var bgButtonNormal:Class;

[Embed(source="../assets/Graphics/navbuttons_divider.png")]
[Bindable] public static var bgButtonDivider:Class;

[Embed(source="../assets/Graphics/navbuttons_end.png")]
[Bindable] public static var bgButtonEnd:Class;

[Embed(source="../assets/Graphics/ledblink.swf")]
[Bindable] public static var LEDOn:Class;

[Embed(source="../assets/Graphics/ledoff.png")]
[Bindable] public static var LEDOff:Class;

[Embed(source="../assets/Graphics/divider.png")]
[Bindable]internal var imgDivider:Class;

// As of 6/26/13, this is now an uninitialized public var until I determine the productline:oemname.
//
[Bindable] public var xmlMenuList:XML;


[Bindable] internal static var ALERTBANNERHEIGHT:int=34;
[Bindable] internal var bShowSimTab:Boolean=false;*/
//----------------------------------------------------------------------------//
// CODE
//----------------------------------------------------------------------------//

//______________________________________________________________________________
//==============================================================================
//                                preInitApp
//------------------------------------------------------------------------------
// This should be the first routine that executes in the application.
// Called during preinitialize.
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//
//______________________________________________________________________________
//==============================================================================
/*private preInitApp():void
{


	CursorManager.setBusyCursor();
	ELang.strAppversion=XMSGUIBUILDVERSION;	// Set the static var in ELang with app version
	defineEIFunctions();		// Hook to defined any external interface calls from HTML layer (external.as).

	// Load cookie settings
	setupCookies();

	// set to debug output...this cannot be localized, strings not loaded yet
	XMSUtils.dbi("[INIT] Phase 1: Reading default settings file...");
	Xmit.getFile("/customization/xms/default/settings.xml?ver="+XMSGUIBUILDVERSION,getDefaultSettingsResp,Xmit.alertError);

}
//______________________________________________________________________________
//==============================================================================
//                              setupCookies
//------------------------------------------------------------------------------
// Initialize cookie settings
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//
//______________________________________________________________________________
//==============================================================================

internal function setupCookies():void
{
	// Get defaults from cookies, OR create the default cookies if none exist
	initCookies();
	// Load settings for message types.  Must do this AFTER we register the types!
	loadCookieSettings();
}
//______________________________________________________________________________
//==============================================================================
//                               initCookies
//------------------------------------------------------------------------------
// This function initializes all the cookies used by the app.  First it will see
// if they exist, and if not it creates them with the default options.
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//
//______________________________________________________________________________
//==============================================================================

internal function initCookies():void
{
	var usersettingdefaults:String="userlanguage=auto";	// Set all user setting defaults in this string

	var ckSet:SharedObject = SharedObject.getLocal("XMSSettings");
	if (ckSet.size==0)	// XMSSettings does not exist...so create it
		{
		ckSet.data.mw_enable=new Boolean(true);
		ckSet.data.mw_outUI=new Boolean(true);
		ckSet.data.mw_outSocket=new Boolean(true);
		ckSet.data.mw_outDebug=new Boolean(false);
		ckSet.data.mw_size=200;
		ckSet.data.usersettings=usersettingdefaults;
		ckSet.flush();	// Create initial
		}
	// this conditional is only necessary when we are upgrading xms and the SO already exists...
	// I must add any new properties that arent already there.  For this purpose I am adding
	// a string value for future user settings that is url encoded ie prop1=value1&prop2=value2 etc
	// This way I can add to it in the future without disturbing the format of the SO.
	// I already have all the messaging window stuff in place, so...just leave it alone.
	else if (ckSet.data.usersettings==null)
		{
		// if not present, then we need to 'upgrade' the existing SO
		ckSet.data.usersettings=usersettingdefaults;
		ckSet.flush();
		}
}
//______________________________________________________________________________
//==============================================================================
//                            loadCookieSettings
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//
//______________________________________________________________________________
//==============================================================================
public function loadCookieSettings():void
{
	var ckSet:SharedObject = SharedObject.getLocal("XMSSettings");
	//mwWindowEnabled=ckSet.data.mw_enable;
	mwWindowEnabled=true;
	MessagingWindow.enable(mwWindowEnabled);	// enabled or disabled messaging window output
	mwWindowSize=ckSet.data.mw_size<200?200:ckSet.data.mw_size;

	//mwWindowOutGUI=ckSet.data.mw_outUI;
	mwWindowOutGUI=true;

	MessagingWindow.enableMessageType(MessagingWindow.MWTYPE_GUI,mwWindowOutGUI);
	//mwWindowOutSocket=ckSet.data.mw_outSocket;
	mwWindowOutSocket=true;

	MessagingWindow.enableMessageType(MessagingWindow.MWTYPE_SOCKET,mwWindowOutSocket);
	GData.userLocalPrefs=ckSet.data.usersettings;
}

//______________________________________________________________________________
//==============================================================================
//                          getDefaultSettingsResp
//------------------------------------------------------------------------------
// Response routine to process xms default settings file.  OEM/product specific
// settings file is loaded later.
//
// Input
// -----
//   event: ResultEvent -
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================

internal function getDefaultSettingsResp(event:ResultEvent):void
{
	var result:XML= XML(event.result);
	GData.defaultsettings=result;				// save original default settings for later if needed
	// Set default settings offline/online.
	Xmit.registerOffline(Boolean(Number(result.developer.useoffline)));
	GData.offline=(Boolean(Number(result.developer.useoffline)));
	GData.skiplogin=(Boolean(Number(result.developer.skiplogin)));
	GData.dataserver=(result.developer.dataserver);
	Xmit.registerDataServer(result.developer.dataserver);

	if (Boolean(Number(result.developer.debuglogo)))
		{
		GData.debugLogo=true;
		}

	// debug mode added to developer section to start as early as possible
	if (Boolean(Number(result.developer.debugmode)))
		{
		// enable global indicator
		GData.debugMode=true;
		// enable debug output to messaging window regardless of release type
		MessagingWindow.enableMessageType(MessagingWindow.MWTYPE_DEBUG,true);
		MessagingWindow.enableMessageType(MessagingWindow.MWTYPE_DEBUG_INIT,true);
		MessagingWindow.enableMessageType(MessagingWindow.MWTYPE_DEBUG_PERF,true);
		// show message with debug style
		XMSUtils.dbi("Debug Mode Enabled");
		// and show it in the status bar too in case messaging window is hidden
//    setStatusBarMessage("Debug Mode Enabled");
		}

	if (Boolean(Number(result.developer.showsimtab))==true)
		{
		bShowSimTab=true;
		}
	// Now get info to see the language and the oem name from the server, if present
	Xmit.getData("/info","",respGetInfo,respGetInfoFault);
}

//______________________________________________________________________________
//==============================================================================
//                               respGetInfo
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   event: ResultEvent -
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================
internal function respGetInfo(event:ResultEvent):void
{
	// Check for error, but note that no string file is loaded yet so I
	if( XMSError.checkResponseOK(Number(event.result.cc), AppConstants.PLUGINID))
		{
		GData.xmlInfo=XML(event.result);	// Save info for later
		GData.licensed=Boolean(Number(event.result.licensed));
		GData.isEvaluation=Boolean(Number(event.result.eval));


		// Special case ...see if an oem name override has been given in the url
		// for demo mode (only allow this if offline!!!)
		var currentUri:String = ExternalInterface.call("window.location.href.toString");
		GData.href=currentUri;


      //------------------------------------------------------//
		// Establish product line
      //------------------------------------------------------//

		var arpl:Array=/productline=([^&]+)(?:$|&)/.exec(currentUri);
		var pl:String=event.result.productline;

		if ((arpl!=null)&&(GData.offline))
			{
			pl=arpl[1];
			}
		else if (pl=="")
			{
			pl="xms";
			}
		GData.productline=pl;
      //------------------------------------------------------//
		// Establish oem name
      //------------------------------------------------------//

		// Check for URL override first
		var aroem:Array=/oemname=([^&]+)(?:$|&)/.exec(currentUri);
		if ((aroem!=null)&&(GData.offline))
			{
			GData.oemname=aroem[1];
			}
		else if (GData.defaultsettings.developer.forceoem!=undefined)
			{
			if (GData.defaultsettings.developer.forceoem!="")
				{
				GData.oemname=GData.defaultsettings.developer.forceoem;
				}
			}

		if (GData.oemname=="")
			{
			// No override set.  Check the result to see if <oemname> is there.
			// If blank, missing, or 'ami', then set to 'default'.
			if (event.result.oemname!=undefined)
				{
				var oemn:String=event.result.oemname;
				if ((oemn=="ami")||(oemn==""))
					{
					GData.oemname="default";	// set path ref to 'default' instead of ami
					GData.isAMIProduct=true;
					}
				else
					{
					GData.oemname=oemn;
					// We have set the oemname to something other than the default, so check
					// to see of its an ami product.
					if (event.result.amiproductcode!=undefined)
						{
						GData.isAMIProduct=Boolean(Number(event.result.amiproductcode));
						}
					}
				}
			else
				{
				// oemname is not defined, force to default
				GData.oemname="default";
				GData.isAMIProduct=true;
				}
			}

      //------------------------------------------------------//
		// installation details
      //------------------------------------------------------//
		if(GData.productline=="dcm")
			{
			var curServer:String = event.result.vueserverlist.@currentid.toString();
			svmList = XML(event.result.vueserverlist);
			for each (var svmhost:XML in XMLList(svmList.server))
				{
				if(curServer == svmhost.@id)
					{
					hostname = "to "+svmhost.@displayname;
					break;
					}
				}
	      	}
		// Final step, get the settings file from the appropriate path
//		Xmit.getFile("/customization/"+GData.productline+"/"+GData.oemname+"/settings.xml?ver="+XMSGUIBUILDVERSION,getCustomSettingsResp,Xmit.alertError);

		// attempt to load style swf first, and wait for COMPLETE or ERROR before loading settings and continuing UI init....
		// Brandon B 3/30/11

		var myEvent:IEventDispatcher = StyleManager.loadStyleDeclarations("./customization/"+GData.productline+"/"+GData.oemname+"/oem.swf");
		myEvent.addEventListener(StyleEvent.ERROR, csserror);
		myEvent.addEventListener(StyleEvent.COMPLETE, cssloaded);
		}
	else
		{
		// NOTE  This string cannot be localized, leave it here as English.
		XMSError.alertErrorMessage("The server has returned an error code ["+event.result.cc +"] when attempting to access /info. ");
		}

	// Load style sheet overrides....
//	var myEvent:IEventDispatcher = StyleManager.loadStyleDeclarations("/customization/"+GData.productline+"/"+GData.oemname+"/oem.swf");
//	myEvent.addEventListener(StyleEvent.ERROR, csserror);
}

//______________________________________________________________________________
//==============================================================================
//                                 csserror
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   event: StyleEvent -
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================
internal var cssoverrideerr:Boolean=false;
internal function csserror(event:StyleEvent):void
{
	// This can't be localized because it is executed before elang init.
	XMSUtils.dbi("[INIT] Could not load "+"'/customization/"+GData.productline+"/"+GData.oemname+"/oem.swf' style override...(this is not necessarily an error)");
	// for some reason Flex is calling csserror handler twice when loadStyleDeclarations fails - the only difference I can see in the debugger
	// is a small change in the error string text, but the actual error events are unique.
	// At any rate, set a global flag to prevent multiple loads of the settings file.
	if (cssoverrideerr==false)
		{
		Xmit.getFile("/customization/"+GData.productline+"/"+GData.oemname+"/settings.xml?ver="+XMSGUIBUILDVERSION,getCustomSettingsResp,Xmit.alertError);
		}
	cssoverrideerr=true;
}

internal function cssloaded(event:StyleEvent):void
{
	// This can't be localized because it is executed before elang init.
	XMSUtils.dbi("[INIT] Loaded "+"'/customization/"+GData.productline+"/"+GData.oemname+"/oem.swf' style override successfully");

	Xmit.getFile("/customization/"+GData.productline+"/"+GData.oemname+"/settings.xml?ver="+XMSGUIBUILDVERSION,getCustomSettingsResp,Xmit.alertError);

}




//______________________________________________________________________________
//==============================================================================
//                             respGetInfoFault
//------------------------------------------------------------------------------
// Input
// -----
//   event: FaultEvent -
//______________________________________________________________________________
//==============================================================================

internal function respGetInfoFault(event:FaultEvent):void
{
	// This string cannot be localized
	Alert.show("The server at address "+Xmit.serveraddress+" does not appear to be responding to the initial configuration query.  Please try again, or check the connection.\n"+
				  event.fault.rootCause);
}


//______________________________________________________________________________
//==============================================================================
//                          getCustomSettingsResp
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   event: ResultEvent -
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================

internal function getCustomSettingsResp(event:ResultEvent):void
{
	var result:XML= XML(event.result);
	// OK I have custom settings file.
	setupSettings(result);
}


//______________________________________________________________________________
//==============================================================================
//                              setupSettings
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   result: XML -
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================


internal function setupSettings(result:XML):void
{
	GData.oemsettings=result;	// save the original oem settings file for later if needed
	GData.settings=result;		// for now, the original "settings" object in XMSData is set to the oem...

	var x:int=result.languages.language.length();
	GData.supportedLanguages=[];	// clear it
	for (var i:int=0; i<x;i++)
		{
		GData.supportedLanguages.push({
			label:result.languages.language[i].@label.toString(),
			data:result.languages.language[i].@code.toString()		// changed property from 'code' to 'data' 1/5/11 Brandon B
			});
		}
	if (GData.debugMode)
		{
		MessagingConsole.setcap(10);	// just use 10 events for debugging and to limit affect on mem profiling
		}

   //------------------------------------------------------//
	// set global font size
   //------------------------------------------------------//
	var appfontsize:Number=3;

	var userfontsetting:String=XMSUtils.getUserSetting("fontsizesetting");
	if (userfontsetting=="")
		{
		XMSUtils.addEditUserSetting("fontsizesetting","3");	// Set to default 3
		}
	else
		{
		appfontsize=Number(userfontsetting);
		}
	var css:CSSStyleDeclaration;
	var fontSize:Number=0;
	var selectors:Array = StyleManager.selectors;
	for each (var selector:String in selectors)
			{
			css=CSSStyleDeclaration(StyleManager.getStyleDeclaration(selector));
			if (css.getStyle("fontSize") != null)
				{
				fontSize= Number(css.getStyle("fontSize"));
				css.setStyle("fontSize", fontSize+ (appfontsize-3) );
				// custom attribute to indicate I have already processed app styles.
				// I will check this later after plugins have loaded when updating their
				// styles (see processplugins.as)
				css.setStyle("fontSizeBeenSet", 1);
			}
		}
   //------------------------------------------------------//

	currentState="langinit";		// make SURE we have the settings file before doing langinit
}



//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
// These are application level hooks to the individual state changes.  I wanted
// to have a central place to hook into the initialization flow, regardless of
// where the actual code exists.  -BMB
//----------------------------------------------------------------------------//
//______________________________________________________________________________
//==============================================================================
//                             appInitLangState
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================


internal function appInitLangState():void
{
	initLangState();	// language.as
}
//______________________________________________________________________________
//==============================================================================
//                            appInitLoginState
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================

internal function appInitLoginState():void
{
	initLoginState();	// loginsession.as

	imgEye.addEventListener(MouseEvent.MOUSE_DOWN, function(event:MouseEvent):void
	{
		txtiPassword.displayAsPassword = false;
	});
	imgEye.addEventListener(MouseEvent.MOUSE_UP,mouseFunc);
	imgEye.addEventListener(MouseEvent.MOUSE_OUT,mouseFunc);
}
private function mouseFunc(event:MouseEvent):void
{
	txtiPassword.displayAsPassword = true;
}
//______________________________________________________________________________
//==============================================================================
//                             appInitGUIState
//------------------------------------------------------------------------------
// Abstraction entry point for gui state initialization.  Put pre-init or
// post-init code here.
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================

internal function appInitGUIState():void
{
	initGUIState();	//
}*/

//______________________________________________________________________________
//==============================================================================
//                               initGUIState
//------------------------------------------------------------------------------
// Do any state init here for GUI, such as sizing the messaging window from the
// shared object settings.
//
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================
/*internal function initGUIState():void
{
	if(GData.isEvaluation)
		{
		// call for evaluation period 
		 Xmit.getData("/license/getevalperiod","", function (event:ResultEvent):void {
			if( XMSError.checkResponseOK(Number(event.result.cc), AppConstants.PLUGINID))
				{
				var time:Number = Number(event.result.evaluation.period);	
				if(time==0)
					{
					isEvalOver = true;
					hbEval.visible = false;
					
					return;	
					}
				time--;
				var days:int = Number((time/24/60));
				var hrs:int = String(time/60%24).split('.')[0];
				var mins:int = Number((time%60).toFixed(0));
				//var secs:String ="";
				var sTimer:Timer = new Timer(1000,60); // every min for 60 seconds
				sTimer.start();
	 			lbldays.text = days<10?"0"+days.toString():days.toString();
				lblhrs.text = hrs<10?"0"+hrs.toString():hrs.toString();
				lblmins.text = mins<10?"0"+mins.toString():mins.toString();
	 			
				
				sTimer.addEventListener(TimerEvent.TIMER_COMPLETE, function (te:TimerEvent):void {
	 				if(days ==0 && hrs==0 && mins==0)
						{
						sTimer.stop();
						dispatchEvent(new XMSLicensingEvent(XMSLicensingEvent.LICENSE_DEMO_EXPIRED,
							{
							title:elang.getString('STR_DEMO_EXPIRED'),
							desc:elang.getString('STR_DEMO_EXPIRED_DESC'),
							pluginid:AppConstants.PLUGINID
							}
							));
						}
					else
						{
						sTimer.reset();
						sTimer.start();
						if(mins==0) 
							{
							mins=59;
							if(hrs==0) 
								{
								hrs=23;
								days--;
								}
							else 
								{
								hrs--;
								}
							}
						else 
							{
							mins--;
							}
						}
		 			lbldays.text= days<10?"0"+days.toString():days.toString();
					lblhrs.text = hrs<10?"0"+hrs.toString():hrs.toString();
					lblmins.text = mins<10?"0"+mins.toString():mins.toString();
					}); 
	
			 	} // end of if  
				
			}, Xmit.alertError); 
		}	
	// If coming into the gui state, we are either starting it for the first time
	// OR we are logging back into the GUI.
	// If the boolean below is true, then the device list has already been
	// instantiated and is sitting in memory, ready for refreshing.  If
	// false, then we are starting up the app for the first time, in which
	// case the doInit function of the device list component will refresh it for
	// us when it instantiates.
	tabMessageWindow.height=mwWindowSize;
	//tabMessageWindowContainer.height=mwWindowSize;


	// Interate the menu data provider to disable options that are not valid for
	// the current user

	hboxTreePage.setFocus();


   //------------------------------------------------------//
	// Disable entire app until everything loaded
   //------------------------------------------------------//
	vwstkListContainer.enabled=false;
	topmenubar.enabled=false;


	var ckSet:SharedObject = SharedObject.getLocal("XMSSettings");
	if (ckSet.data.devlist_showlabels==undefined)
		{
		ckSet.data.devlist_showlabels=new Boolean(true);
		ckSet.flush();
		}
	if (ckSet.data.devlist_showtooltips==undefined)
		{
		ckSet.data.devlist_showtooltips=new Boolean(true);
		ckSet.flush();
		}

	if (ckSet.data.show_welcome==undefined)
		{
		ckSet.data.show_welcome=new Boolean(true);
		ckSet.flush();
		}
	GData.XMSSOSettings=ckSet.data;

   //------------------------------------------------------//
   //------------------------------------------------------//

	var search:String=GData.productline+":"+GData.oemname;
	var re:String="[\s,]*"+search+"[,\s]+|[\s,]*"+search+"$";
	var x:XMLList=xmlMenuListOrg.target.( (new RegExp(re,"i")["test"](@scope)) );

	var searchproductdefault:String=GData.productline+":default";
	var spdre:String="[\s,]*"+searchproductdefault+"[,\s]+|[\s,]*"+searchproductdefault+"$";
	var x2:XMLList=xmlMenuListOrg.target.( (new RegExp(spdre,"i")["test"](@scope)) );
	if (x.length()>0)
		{
		if (x.length()>1)
			{
			XMSError.alertErrorMessage("Critical menu parsing error - found more than one match for base menus"+" ["+search+"]");
			}
		else
			{
			xmlMenuList=XML(x[0]).copy();
			}
		}
	else if (x2.length()>0)
		{
		if (x2.length()>1)
			{
			XMSError.alertErrorMessage("Critical menu parsing error - found more than one match for productline default menus"+" ["+search+"]");
			}
		else
			{
			xmlMenuList=XML(x2[0]).copy();
			}
		}
	else if (xmlMenuListOrg.target.(@scope=='defaultmenus').length()==1)
		{
		xmlMenuList=XML(xmlMenuListOrg.target.(@scope=='defaultmenus')[0]).copy();
		}
	else
		{	// something has gone wrong, there are <target> structures but no "default", this should never happen
		XMSError.alertErrorMessage("Critical menu parsing error - cannot locate default menu structures for base");
		}



   //------------------------------------------------------//
	if (GData.productline!="scm")
		{
// DEMO		hbComponentsTabContainer.visible=true;
// DEMO		hbComponentsTabContainer.includeInLayout=true;
		}
   //------------------------------------------------------//

	loadPlugins();	//plugins.as

   //-------------------------------------//
	// Set the user name/label
   //-------------------------------------//
	var thename:String=GData.currentUser.userName;
	var thedomain:String=GData.currentUser.domain;
	var theperm:int=GData.currentUser.getPermissionLevel();
	var thestring:String=GData.currentUser.getRoleString(theperm);
	lblUsername.htmlText="<b>"+thename+"</b> - "+thedomain+" ("+thestring+")";

	if (boolDeviceListInitialized)
		{
		// Process the menu structure again.  In this control path, the final menu structure has already
		// been formed, but the user may have logged out and back in with a different permission.
		// So, I need to reprocess the menu options with the new role.
		iteratePermissions(xmlMenuList);

		// Refresh the device list component
		dispatchEvent(new XMSEvent(XMSEvent.REFRESHDEVICELIST));
		dispatchEvent(new XMSEvent(XMSEvent.REFRESHIPLIST));

		// Restart with the default page for the device.
		//activatePage(GData.xmlCurrentMenu.@defaultpageview);


		}
	else
		{
		setupOEMAssets();
		msInit();	// init messaging system (messagingsystem.as)
		MessagingWindow.registerOutput(txtaMessageWindow);

		// Unlike above, this control path means the app is initializing for the first time,
		// and we do not have all menu items from the plugins yet.  So, do this after all
		// plugins are processed and the final menu structure is formed
		// (see processPluginLastPhase() in processplugins.as)
		//	iteratePermissions(xmlMenuList);

		// Add the associated view name for the base menu items.  This is just a helper function
		// to write the view name that goes with these menu options (at this point, the base
		// menu options for ipmi) to create a link between menuoption->view
		iterateViewname(xmlMenuList, AppConstants.PLUGINID);

	   //-------------------------------------//
		// Add GUI state event listeners
	   //-------------------------------------//

	// set global mouse watcher to record x,y for various purposes
		stage.addEventListener(MouseEvent.MOUSE_MOVE,function(event:MouseEvent):void
							{
							GData.mouseX = event.stageX;
  							GData.mouseY = event.stageY;
//                   trace("Mouse X="+GData.mouseX+": Mouse Y="+GData.mouseY);
							});

		stage.addEventListener(XMSEvent.GLOWOBJECT,function(event:XMSEvent):void
							{
							if ( Number(event.dto.show)==1)
								//glowTarget.play([Application.application[event.dto.target]]);
								glowObject.play([Application.application[event.dto.target]]);
							else
								unglowObject.play([Application.application[event.dto.target]]);
							});

		stage.addEventListener(XMSEvent.SELECTMODE,function(event:XMSEvent):void
							{
							handleModeSelect(event);
							});

		stage.addEventListener(XMSEvent.TREESELECT,function(event:XMSEvent):void
							{
				mainTaskList.selectTaskorTool(event.dto.pluginid,event.dto.compid);
							});

		stage.addEventListener(XMSEvent.SELECTMESSAGINGTAB,function(event:XMSEvent):void{
							 handleMessagingTabChange(event);
							});

		addEventListener(XMSEvent.MAINMENUCLICK,function(event:XMSEvent):void{
							 handleTopMenuEvent(event.dto.data);
							 });
		addEventListener(XMSEvent.LOCKPAGEMENUBAR,function(event:XMSEvent):void{
							menuViews.enabled=false;
							 });
		addEventListener(XMSEvent.UNLOCKPAGEMENUBAR,function(event:XMSEvent):void{
							menuViews.enabled=true;
							 });

		addEventListener(XMSEvent.PAGECHANGE,function(event:XMSEvent):void{
							MessagingWindow.out("Caught page change event to :"+event.dto.viewname);
							var pid:String="";
							var ind:int=0;
							if (event.dto.pluginid)
								{
								pid=event.dto.pluginid;
								ind=Number(GData.pluginViewIndex[event.dto.pluginid]);	// get index associated with pluginid
								GData.currentMenuItemPluginViewID=pid;
								GData.sourceMenuItemPluginViewID=pid;
								if (GData.currentPluginViewIndex!=ind)
									{
									vwstkPlugin.selectedIndex=ind;
									GData.currentPluginViewIndex=ind;
									GData.currentActivePluginID=pid;
									}
								if (event.dto.role)
									{
									GData.currentRole=event.dto.role;
									}
								else
									{
									// setting all roles to rw, since i have no idea what the previous
									// role setting was.  You MUST specify this when broadcasting the
									// event if you want privilege handling.
									GData.currentRole=0x3333;
									}
								activatePage(event.dto.viewname)
								}
							  // No pluginid given, search the current menu structure for the viewname and
							  // try to pull it from there
						  else
							  {
							  // make sure I can find the given page viewname in the current
							  // device's menu list.
							  var checkview:XMLList=GData.xmlCurrentMenu..menuitem.(hasOwnProperty("@pageview")&&@pageview==event.dto.viewname);
							  if (checkview.length()!=0)
								  {
								  // set all the GDC parameters based on the requested viewname
								  pid=checkview.@pluginviewid;				// get pluginid (viewname) associated with menu node
								  GData.currentRole=checkview.@role;
								  GData.currentMenuItemPluginViewID=pid;
								  GData.sourceMenuItemPluginViewID= (checkview.@sourcepluginviewid==undefined?checkview.@pluginviewid:checkview.@sourcepluginviewid);
								  ind=Number(GData.pluginViewIndex[pid]);	// get index associated with pluginid

								  // check the plugin viewstack index to see if we need to switch plugins for augmented menu
								  // items from other plugins
								  if (GData.currentPluginViewIndex!=ind)
									  {
									  vwstkPlugin.selectedIndex=ind;
									  GData.currentPluginViewIndex=ind;
									  GData.currentActivePluginID=pid;
									  }
								  activatePage(event.dto.viewname)
								  }
							  else
								  {
								  MessagingWindow.out("<b>"+"Cannot locate view ["+event.dto.viewname+"]</b>",MessagingWindow.MWTYPE_ERROR);

								  }
							  }
							});
		addEventListener(XMSEvent.VIEWCHANGE,function(event:XMSEvent):void{
							  MessagingWindow.out("Caught view change event to type:"+event.dto.devtype+" for plugin "+event.dto.pluginid);
							  GData.selectedDeviceType=event.dto.devtype;
							 activateView(event.dto.devtype, event.dto.pluginid, event.dto.icon)
							});


		addEventListener(XMSMessagingEvent.DEVICETRAPNOTIFY,function(event:XMSMessagingEvent):void
							{
							var devid:String=event.dto.devid;
							var pid:String=event.dto.pluginid;
							var type:String="";
							var udnode:XMLList=XMSUtils.getNodefromDevID(devid, pid);
							if (udnode.length())
								{
								var str:String=XMSUtils.createDeviceNameString(devid,pid);
								MessagingWindow.out(elang.getString('STR_MESSAGINGSYSTEM_NEWTRAPDETEFROM')+" "+str,
										  MessagingWindow.MWTYPE_GUI);
								}
							else
								{
								// Hmm, I suppose its possible that a new device in the status message may appear
								// with the trap bit set...so perhaps this is not really an error...
//                      MessagingWindow.out(elang.getString('STR_COMPDEVICELIST_IMP_TRAHANDDIDNOTFIND')+" [id:"+trapid+"] "+elang.getString('STR_COMPDEVICELIST_IMP_INLOCASTOR'),
//                              MessagingWindow.MWTYPE_GUI);
								}
							});


		addEventListener(XMSEvent.LOCKPAGEAREA,function(event:XMSEvent):void
							{
							vboxPageArea.enabled=false;
							});
		addEventListener(XMSEvent.UNLOCKPAGEAREA,function(event:XMSEvent):void
							{
							vboxPageArea.enabled=true;
							});

		addEventListener(XMSEvent.SHOWALERTBANNER,function(event:XMSEvent):void
							{
							var notifications:XMLList=GData.xmllTasksTools..node.(hasOwnProperty("@alertnotification") && @alertnotification=="1");
							if (GData.alertBannerOpen==true)
								{
								if (notifications.length()>1)
									{
									lblAlertBanner.text=elang.getString("STR_APP_MULTIEVENTDETECPLEASCHECKTHEITEMSUNDERVDIMANAG");
									}
								else
									{
									lblAlertBanner.text=event.dto.text;
									}
								butalert.enabled=true;
								}
							else
								{
								lblAlertBanner.text=event.dto.text;
								butalert.enabled=true;
								GData.alertBannerOpen=true;
								alertbannerdown.play([alertbanner]);
								}
							});

		addEventListener(XMSEvent.OPENPOPUP,function(event:XMSEvent):void{
							  MessagingWindow.out(elang.getString('STR_APP_OPENPOPUEVEN'),MessagingWindow.MWTYPE_DEBUG);
							  XMSUtils.showWindow(event.dto.popup);
							 });

		addEventListener(XMSEvent.OPENXMSSNMPLOG,function(event:XMSEvent):void{
                       // this is a big popup, give as much width as possible
                       var xx:popupSNMPTrapLog=popupSNMPTrapLog(XMSUtils.showWindow(popupSNMPTrapLog,true,0.95,0.8));
                       xx.deviceid=event.dto.deviceid;
                       xx.pluginid=event.dto.pluginid;
							 });

		addEventListener(XMSEvent.OPENADDRESSBOOK,function(event:XMSEvent):void{
								XMSUtils.showWindow(popupAlertDestinationManager,true, 0.6, 0.8);
							 });

		addEventListener(XMSEvent.OPENSCHEDULER,function(event:XMSEvent):void{
								var pop:IFlexDisplayObject=XMSUtils.showWindow(popupScheduler, true);
								popupScheduler(pop).setscheduledata=event.dto.scheduledata;
							 });
		addEventListener(XMSEvent.SHOWREPORTOPTIONS,function(event:XMSEvent):void{
								var pop:IFlexDisplayObject=XMSUtils.showWindow(popupReportOptions, true);
								popupReportOptions(pop).reportdata=event.dto.reportdata;
							 });
		addEventListener(XMSEvent.MAXIMIZE,function(event:XMSEvent):void{
								zoom.addChild(vbTaskandTitle);
								tasktit._boolMaximized = true;
								tasktit.buttonlabel="Zoom Out";
								tasktit.buttonicon=IconsButtons.imgZoomOut;
								if((event.dto.auto)&&(GData.selectedTTId=="viewWizard" || GData.selectedTTId=="viewEvents"))
									{
									tasktit.lblZoom.visible=true;
									tasktit.lblZoom.includeInLayout=true;
									}
							 });

		addEventListener(XMSEvent.RESTORE,function(event:XMSEvent):void{
								vbTaskContainer.addChildAt(vbTaskandTitle,0);
							 });

		// If there are functions that can be called by popups, then they need to have their listeners at the systemManager
		// level.
		Application.application.systemManager.addEventListener(XMSEvent.SHOWHELP,function(event:XMSEvent):void{
								if (event.dto.pluginid==undefined)
									{
									Alert.show("'pluginid' was not passed when showing help....this is required");
									}
								else
									{
									// pluginid can be blank, but it defaults to base
									var pluginid:String= event.dto.pluginid==""?"base":event.dto.pluginid;
							 		showHelp(event.dto.viewname, pluginid);
							 		}
							 });
		Application.application.systemManager.addEventListener(XMSEvent.UPDATEHELP,function(event:XMSEvent):void{
								if (event.dto.pluginid==undefined)
									{
									Alert.show("'pluginid' was not passed when showing help....this is required");
									}
								else
									{
									// pluginid can be blank, but it defaults to base
									var pluginid:String= event.dto.pluginid==""?"base":event.dto.pluginid;
							 		updateHelp(event.dto.viewname, pluginid);
							 		}
							 });
		Application.application.systemManager.addEventListener(XMSEvent.SHOWUPLOAD,function(event:XMSEvent):void
								{
								if (event.dto.pluginid==undefined)
									{
									Alert.show("'pluginid' was not passed when showing uploader....this is required");
									}
								else
									{
								 	showUpload(event.dto);
								 }
							 	}
							 );
		Application.application.systemManager.addEventListener(XMSEvent.SHOWADDRESSBOOK_EMAILS,function(event:XMSEvent):void
								{
							 	showEmailChooser(event.dto);
							 	}
							 );


		addEventListener(XMSEvent.DEVICELISTCHANGE,deviceChangeHandler);

		// Licensing related events - adding these here in the gui state (instead of loginsession)
		// because they deal with plugin licenses, which are not relevant until
		// the gui state has been initialized.
		// Register for possible event types and conditionalize processing in the handler.
		addEventListener(XMSLicensingEvent.LICENSE_BREACH, handleLicenseEvent);
		addEventListener(XMSLicensingEvent.LICENSE_DEMO_EXPIRED, handleLicenseEvent);
		addEventListener(XMSLicensingEvent.LICENSE_DEMO_SESSION_EXPIRED, handleLicenseEvent);
		addEventListener(XMSLicensingEvent.LICENSE_DEMO_SESSION_NOT_STARTED, handleLicenseEvent);
		addEventListener(XMSLicensingEvent.LICENSE_UNINSTALL_IN_PROGRESS, handleLicenseEvent);

		pbInit.mode=ProgressBarMode.MANUAL;
		pbInit.minimum=0;
		pbInit.maximum=100;
		pbInit.labelPlacement=ProgressBarLabelPlacement.CENTER;
		pbInit.label="%3%%";

		addEventListener(XMSEvent.UPDATEINITLABEL,function(event:XMSEvent):void
		{
		txtInit.text+=event.dto.statusstring+"\n";
		});

		addEventListener(XMSEvent.UPDATEINITPROGRESS,function(event:XMSEvent):void
		{
			if (event.dto.delta==undefined || event.dto.delta==false)
				{
				pbInit.setProgress(Number(event.dto.progress),100);
				}
			else
				{
				pbInit.setProgress(pbInit.value+Number(event.dto.progress),100);
				}

		});

		}
   //------------------------------------------------------//
	// Set up messaging window event listeners
	//------------------------------------------------------//


	addEventListener(XMSMessagingEvent.DEVICEHEALTHCHANGE,function(event:XMSMessagingEvent):void
      {
		if (event.dto.healthstatus!="")
			{
			var hlt:int=Number(event.dto.healthstatus)&0xf;
			var devstring:String=XMSUtils.createDeviceNameString(event.dto.devid,event.dto.pluginid);
			var colorstring:String="";
			switch (hlt)
				{
				case XMSConstants.GLOBAL_HEALTHSTAT_GOOD:
					colorstring="#00ff00";
					break;
				case XMSConstants.GLOBAL_HEALTHSTAT_WARN:
					colorstring="#ffff00";
					break;
				case XMSConstants.GLOBAL_HEALTHSTAT_CRITICAL:
					colorstring="#ff0000";
					break;
				case XMSConstants.GLOBAL_HEALTHSTAT_NONRECOVERABLE:
					colorstring="#aa0000";
					break;
				case XMSConstants.GLOBAL_HEALTHSTAT_UNKNOWN:
				case XMSConstants.GLOBAL_HEALTHSTAT_DONOTASSIGN:
				default:
					break;
				}
			colorstring="<font color='"+colorstring+"'>"+XMSUtils.getGlobalHealthString(hlt,false)+"</font>";
			MessagingWindow.out("Health Change : The following device ("+devstring+")"+"has changed to"+" "+colorstring,
					  MessagingWindow.MWTYPE_GUI);

			}
		});



	CursorManager.removeBusyCursor();
}*/

//______________________________________________________________________________
//==============================================================================
//                             handleModeSelect
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   data: Object - dto from event
//          {mode:<one of XMSConstants.MODE_DEVICE,MODE_EVENTS,MODE_TASKS,
//          taskid:id of the tool/task to select if mode=MODE_TASKS }
//
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================

/*internal var gTaskSwitchData:Object={pluginid:"", compid:""};

internal function handleModeSelect(event:XMSEvent):void
{

	switch (event.dto.mode)
		{
		case XMSConstants.MODE_DEVICE:
			vbNodes.dispatchEvent(new MouseEvent(MouseEvent.CLICK));
			break;
		case XMSConstants.MODE_EVENTS:
			vbEvents.dispatchEvent(new MouseEvent(MouseEvent.CLICK));
			break;
		case XMSConstants.MODE_TASKS:
			vbConfig.dispatchEvent(new MouseEvent(MouseEvent.CLICK));



			if (event.dto.compid && event.dto.compid!="")
				{
				taskbcbackup=[];	// clear breadcrumb for simulated click
				gTaskSwitchData.pluginid=event.dto.pluginid;
				gTaskSwitchData.compid=event.dto.compid;


				}

			// if we are already viewing tasks, the code that sets the
			// item selection will not fire because it is tied to the show
			// event of the viewstack (which will not fire if already active)
			// so, call the handler directly
			if (GData.viewMode==XMSConstants.MODE_TASKS)
				{
				handleEntityIPViewChange('tasks');
				}

			break;
		default:
			break;
		}
}
//______________________________________________________________________________
//==============================================================================
//                         handleMessagingTabChange
//------------------------------------------------------------------------------
// Function to switch to a specific tab in the messaging console.
// Typically used for tutorials.
//
// Input
// -----
//   event: XMSEvent - event payload
//				dto: {tabid:<one of XMSConstants.MESSAGINGTAB_MESSAGING/HELP/TASK}
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================

internal function handleMessagingTabChange(event:XMSEvent):void
{
	switch (event.dto.tabid)
		{
		case XMSConstants.MESSAGINGTAB_MESSAGING:
			tabMessageWindow.selectedChild=mwMessagingConsole;
			break;
		case XMSConstants.MESSAGINGTAB_TASKS:
			tabMessageWindow.selectedChild=mwTaskConsole;
			break;
		case XMSConstants.MESSAGINGTAB_HELP:
			tabMessageWindow.selectedChild=mwHelpConsole;
			break;
		default:
			break;
		}
}


//______________________________________________________________________________
//==============================================================================
//                            handleLicenseEvent
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   event: XMSLicensingEvent -
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================

internal function handleLicenseEvent(event:XMSLicensingEvent):void
{
	closeAllPopups();
	vbTaskandTitle.enabled = false;
	tabMessageWindow.enabled = false;
	//mainBreadcrumb.enabled = false;
	//hbMainMenu.enabled = false;
	hbModeButtons.enabled=false;
	vdivBoxTreeArea.enabled=false; 
	hbMenubar.enabled=false;
	
	switch (event.type)
		{
		case XMSLicensingEvent.LICENSE_DEMO_EXPIRED:
		case XMSLicensingEvent.LICENSE_DEMO_SESSION_EXPIRED:
			lnkBuy.visible = true;
			lnkRegister.visible = true;
		case XMSLicensingEvent.LICENSE_BREACH:
		case XMSLicensingEvent.LICENSE_UNINSTALL_IN_PROGRESS:
		case XMSLicensingEvent.LICENSE_DEMO_SESSION_NOT_STARTED:
		default:
			disablePluginAccess(event.dto.title, event.dto.desc);
			break;
		}
}


internal function showLicenseView():void
{
	mainTaskList.selectTaskorTool("base","viewLicenseManager");
	vbTaskandTitle.enabled = true;
}


//______________________________________________________________________________
//==============================================================================
//                            iteratePermissions
//------------------------------------------------------------------------------
// Parses all given menu nodes to enable or disable based on the user permission.
//
// Input
// -----
//   sourcenode: XML - xml structure to parse
//
// Output
// ------
//   void -
//______________________________________________________________________________
//==============================================================================

internal function iteratePermissions(sourcenode:XML):void
{
	var menus:XMLList=sourcenode.descendants("*");
	var x:int=menus.length();
	for (var i:int=0; i<x;i++)
		{

		if (!GData.currentUser.checkPermission(Number(menus[i].@role)))
			{
			menus[i].@enabled=false;
			}
		else
			{
			menus[i].@enabled=true;
			}
		}
}

//______________________________________________________________________________
//==============================================================================
//                             iterateViewname
//------------------------------------------------------------------------------
// This function is only used once during startup to assign the viewname to the
// builtin device menu options.  It's just for convenience.
//
// Input
// -----
//   sourcenode: XML - xml structure to parse
//   viewname: String - string name for the view associated with these menu
//                      options
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================

internal function iterateViewname(sourcenode:XML, pluginviewid:String=AppConstants.PLUGINID):void
{
	var menus:XMLList=sourcenode.descendants("*");
	var x:int=menus.length();
	for (var i:int=0; i<x;i++)
		{
		menus[i].@pluginviewid=pluginviewid;	// Set the view name for this node
		}
}


internal var loader:URLLoader;

//______________________________________________________________________________
//==============================================================================
//                              setupOEMAssets
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================

internal function setupOEMAssets():void
{
	// Set up all graphics/customization
	var _app:Object=mx.core.Application.application;
//	var relativepath:String=_app.parameters.relpath;

	var relativepath:String=".";


	var path:String=relativepath+"/customization/"+GData.productline+"/"+GData.oemname;
	// load the branding graphics
//	hboxHeader.setStyle("backgroundImage",path+"/Graphics/banner_background.png");
	bannercanvas.source=path+"/Graphics/banner_background.png";
	appbackground.source=path+"/Graphics/app_background.png";
	//hboxDivider.setStyle("backgroundImage",path+"/Graphics/header_divider.png");
	imgBannerLeft.source=path+"/Graphics/banner_left.png";
	//cvsBannerRight.setStyle("backgroundImage",path+"/Graphics/banner_right.png");
	imgBannerLogo.source=path+"/Graphics/banner_logo.png";
	imgBannerRight.source=path+"/Graphics/banner_right.png";
	//imgTaskBottomLogo.source=path+"/Graphics/taskbottomlogo.png";

	var customSection:XMLList=GData.settings.customization;

	cvsBannerRight.width=Number(customSection.banner.@imgRightWidth);
	// Set product name label, if needed
	lblHeaderOEM.visible=(customSection.titlelabelstyle.@visible=="1");
	lblHeaderOEM.includeInLayout=(customSection.titlelabelstyle.@visible=="1");
	lblHeaderOEM.x=customSection.titlelabelstyle.@x;
	lblHeaderOEM.y=customSection.titlelabelstyle.@y;
	lblHeaderOEM.setStyle("color",String(customSection.titlelabelstyle.@color));
	lblHeaderOEM.setStyle("fontSize",customSection.titlelabelstyle.@size);
	lblHeaderOEM.setStyle("fontWeight",String(customSection.titlelabelstyle.@weight));


	hboxDatabaseUse.setStyle("right",Number(customSection.databasebar.@bottomrrightx));
	hboxDatabaseUse.setStyle("bottom",Number(customSection.databasebar.@bottomrighty));
	hboxDatabaseUse.visible=(customSection.databasebar.@visible=="1");

	// User login section
	lblUsername.setStyle("color",String(customSection.loginarea.@fontcolor));
	tbun.setStyle("backgroundColor",String(customSection.loginarea.@backgroundcolor));
	tbun.setStyle("borderStyle",String(customSection.loginarea.@borderstyle));
	tbun.setStyle("borderThickness",String(customSection.loginarea.@borderwidth));
	tbun.setStyle("borderColor",String(customSection.loginarea.@bordercolor));


	if (Boolean(Number(customSection.banner.@backgroundstretch)))
		{
		hboxHeader.setStyle("backgroundSize","100%");
		}
}

//______________________________________________________________________________
//==============================================================================
//                                 initApp
//------------------------------------------------------------------------------
// Called during initialize.
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//
//______________________________________________________________________________
//==============================================================================




internal function initApp():void
{
	Application.application.contextMenu.hideBuiltInItems();
	// set to debug output...this cannot be localized, strings not loaded yet
	XMSUtils.dbi("[INIT] Phase 2: Setting defaults ...");
	trace('Init app');
	ToolTipManager.showDelay = 500;
	ToolTip.maxWidth = 550;
	ToolTipManager.hideDelay = Infinity;
	ToolTipManager.toolTipClass = com.misc.HTMLTooltip;

//   ToolTipManager.showEffect = toolTipShowEffect;
   ExternalInterface.addCallback("handleExternalTabKey", handleExternalTabKey);
   ExternalInterface.addCallback("getAppPixelWidth", returnWidth);	// add callback for zoom detection

}

//______________________________________________________________________________
//==============================================================================
//                               returnWidth
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   None
//
// Output
// ------
//   int -
//
//______________________________________________________________________________
//==============================================================================

internal function returnWidth():int
{
	return Application.application.width;
}


//______________________________________________________________________________
//==============================================================================
//                           handleExternalTabKey
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   name: String -
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================

private function handleExternalTabKey(name:String):void
{
    if (name == "false")
    {
        // only the TAB key has been pressed
        focusManager.getNextFocusManagerComponent().setFocus();
    }
    else
    {
        // the combination of  SHIFT+TAB has been pressed
        focusManager.getNextFocusManagerComponent(true).setFocus();
    }
}

//______________________________________________________________________________
//==============================================================================
//                              createComplete
//------------------------------------------------------------------------------
// Called when creationComplete fires.  Note that this will fire before any
// state init function calls, such as language init, so we still do not have
// strings loaded yet.
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================
public function createComplete():void
{
	// set to debug output...this cannot be localized, strings not loaded yet
	XMSUtils.dbi("[INIT] Application creation complete, transitioning to language init state, setting up event listeners...");

	// callback for the onunload event when flex application closes
	// added to handle the session validation and refresh issue
	ExternalInterface.addCallback("flexShutDownHandler",flexShutDownHandler);
   ExternalInterface.call("focusflex");

}



//______________________________________________________________________________
//==============================================================================
//                                appkeydown
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   event: KeyboardEvent -
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================

internal function appkeydown(event:KeyboardEvent):void
{
trace("Key Pressed: " + String.fromCharCode(event.charCode) +         " (key code: " + event.keyCode + " character code: "         + event.charCode + ")");
}


//______________________________________________________________________________
//==============================================================================
//                             topmenubarItemClick
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   event: MenuEvent -
//
// Output
// ------
//   void -
//
//
//______________________________________________________________________________
//==============================================================================

internal function topmenubarItemClick(event:MenuEvent):void
{

	// Set the role value for whatever was clicked.
	GData.currentRole=Number(event.item.@role);
	dispatchEvent(new XMSEvent(XMSEvent.MAINMENUCLICK, {data:String(event.item.@data), sourcepluginid:event.item.@sourcepluginid} ));

}



//______________________________________________________________________________
//==============================================================================
//                            handleTopMenuEvent
//------------------------------------------------------------------------------
// This is a handler that will execute when anything on the top bar is clicked.
// This change was made to allow any plugin to listen for the event and popup
// its own component.
//
//
// Input
// -----
//   data: String -
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================


internal function handleTopMenuEvent(data:String):void
{
	var userlang:String=XMSUtils.getTokenfromString("userlanguage",GData.userLocalPrefs);

	// Determine action based on the data associated with the item
	switch (data)
		{
		case "base_web":
			navigateToURL(new URLRequest(GData.settings.customization.websitelink));
			break;
		case "base_xmssm":
			navigateToURL(new URLRequest('./ScriptManager.html'+'?lang='+userlang));
			break;
		case "base_xmsrm":
			navigateToURL(new URLRequest('./ReportManager.html'+'?lang='+userlang));
			break;
		case "base_xmspm":
			navigateToURL(new URLRequest('./PowerManager.html'));
			break;
		case "base_stopsm":
			handleSMStop();
			break;
		case "base_restartsm":

			// As of 3.0, restarting will just reload the device list and kickstart the
			// messaging system from the last update.  We do not want to pass a 0 start
			// any more.
			//dispatchEvent(new XMSMessagingEvent(XMSMessagingEvent.STARTPOLLINGRESET,{reason:"Tools menu restart"}));
			//EIP#329903 - below clear method added to clear messaging logs before loading the message 
			MessagingConsole.clear();
			MessagingConsole.addEvent(MessagingConsole.TYPE_APP,
				 XMSConstants.GLOBAL_HEALTHSTAT_INFORMATION,
				elang.getString("STR_APP_RESTTHEMESSASYSTERELOATHELISTOFNODES"));

			dispatchEvent(new XMSEvent(XMSEvent.REFRESHDEVICELIST));
			dispatchEvent(new XMSEvent(XMSEvent.REFRESHIPLIST));

			break;
		case "base_cfg":
			XMSUtils.showWindow(popupXMSCfg,true, 0.5, 0.9);
			break;
		case "base_lang":
			XMSUtils.showWindow(popupLanguage);
			break;
		case "base_ssl":
			XMSUtils.showWindow(popupSSL);
			break;
		case "base_showxmsevents":
			//XMSUtils.showWindow(popupXMSEvents,true,0.95,0.8);
			// I defined an event for this, so use it so instantiation is handled via the same path
			dispatchEvent(new XMSEvent(XMSEvent.OPENXMSEVENTLOG, {deviceid:"", pluginid:""}));
			break;
		case "base_showsnmplog":
			//XMSUtils.showWindow(popupSNMPTrapLog,true,0.95,0.8);
			// I defined an event for this, so use it so instantiation is handled via the same path
			dispatchEvent(new XMSEvent(XMSEvent.OPENXMSSNMPLOG, {deviceid:"", pluginid:""}));
			break;
		case "base_downlogs":
			downloadLogs();
			break;
		case "base_xmsupdate":
			XMSUtils.showWindow(popupXMSUpdate);
			break;
		case "base_adm":
			dispatchEvent(new XMSEvent(XMSEvent.OPENADDRESSBOOK));
			//XMSUtils.showWindow(popupAlertDestinationManager,true, 0.6, 0.8);
			break;
		case "base_user":
			XMSUtils.showWindow(popupUsers);
			break;
		case "base_xmsalerting":
			XMSUtils.showWindow(popupXMSAlerting, true, 0.75, 0.8);
			break;
		case "base_xmsinfo":
			XMSUtils.showWindow(popupXMSInfo);
			break;
		case "base_plugins":
			XMSUtils.showWindow(popupPluginSummary);
			break;
		case "base_dbm":
			XMSUtils.showWindow(popupDBMaintain);
			break;
		//case "base_license":
			//XMSUtils.showWindow(popupLicense,true, 0, 0.5);
			//break;

		case "base_installnewlic":
			XMSUtils.showWindow(popupAddLicense,true);
			break;
		case "base_buynewlic":
			//navigateToURL(new URLRequest(GData.xmlInfo.licenseportal),'_blank');
			var request:URLRequest = new URLRequest(GData.xmlInfo.licenseportal);
			request.method = URLRequestMethod.POST;
			var params:URLVariables = new URLVariables();
			var inx:int = 0;
			for each (var packageVer:XML in GData.xmlInfo.packages)
				{
				params['package['+inx+']'] = packageVer.@version;
				inx++;
			  	}
			request.data = params;
			navigateToURL(request,'_blank');
			break;
		case "base_allocateip":
			//if (GData.commandIssuerKey[XMSConstants.COMMANDISSUERKEY_LICENSING]!=null &&!GData.offline)
				//{
				//XMSError.alertGenericAttention(elang.getString("STR_APP_THEUSERINTERISWAITIFORTHESERVETOCONFI"),
				//elang.getString("STR_APP_AWAILICENCHANGCONFI"));
				//}
			//else
				//{
			XMSUtils.showWindow(popupLicenseChoose,true, 0, 0.85);
				//}
			break;

		case "base_uninstall":
			XMSUtils.showWindow(popupUninstall);
			break;
		case "base_xmsam":
			XMSUtils.showWindow(popupAuthManager,true, 0.5);
			break;
		case "base_welcome":
			XMSUtils.showWindow(popupWelcome,true);
			break;
		case "base_servinfo":
			XMSUtils.showWindow(popupSVMInfo,true);
			break;

		default:
			// do nothing, it may be handled by a plugin
			break;
		}
	MessagingWindow.out("Top menu bar clicked, item data="+data,MessagingWindow.MWTYPE_DEBUG);

}*/
//______________________________________________________________________________
//==============================================================================
//                                showUpload
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   dto: Object -
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================

/*
internal function showUpload(dto:Object):void
{
	var pluginid:String= dto.pluginid==""?"base":dto.pluginid;

	var upwin:IFlexDisplayObject;

	upwin= PopUpManager.createPopUp(this, popupFileUploader,true);
	upwin.x = this.width / 2 - upwin.width / 2;
	var ypos:int=((this.height-upwin.height)/2)*0.5;
	upwin.y=ypos>=0?ypos:0;

	if (dto.filefilters!=undefined)
		{
		popupFileUploader(upwin).fileFilters=dto.filefilters;				//OPTIONAL, defaults to *.*
		popupFileUploader(upwin).fileType=dto.filetype;
		}
	if (dto.challengeTokenPath!=undefined)
		{
	popupFileUploader(upwin).challengeTokenPath=dto.challengetokenpath;
		}
	// this is a callback to a function that can display the selected filename, if needed
	popupFileUploader(upwin).filenamefunction=dto.filenamefunction;	// OPTIONAL, but recommended
	popupFileUploader(upwin).action=dto.action;								// REQUIRED
	popupFileUploader(upwin).actionoffline=dto.actionoffline;			// REQUIRED
	popupFileUploader(upwin).responseFunction=dto.responsefunction;	// REQUIRED
	popupFileUploader(upwin).pluginid=pluginid;								// REQUIRED
}


//______________________________________________________________________________
//==============================================================================
//                             showEmailChooser
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   dto: Object -
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================

internal function showEmailChooser(dto:Object):void
{
	var empop:IFlexDisplayObject=XMSUtils.showWindow(popupEmailDestinations, true, 0.6, 0.7);

//	var empop:IFlexDisplayObject = PopUpManager.createPopUp(this, popupEmailDestinations,true);
//	empop.x = this.width / 2 - empop.width / 2;
//	var ypos:int=((this.height-empop.height)/2)*0.5;
//	empop.y=ypos>=0?ypos:0;

	popupEmailDestinations(empop).responseFunction=dto.callback;

	if (dto.preSelectedItems)
		{
		popupEmailDestinations(empop).preSelectedItems=dto.preSelectedItems;
		}
	if( dto.allowedDestinationTypes)
		{
		popupEmailDestinations(empop).allowedDestinationTypes=dto.allowedDestinationTypes;
		}
	popupEmailDestinations(empop).setFocus();


}


//______________________________________________________________________________
//==============================================================================
//                                 showHelp
//------------------------------------------------------------------------------
// This function is triggered from the Help button in the component
// compTitleandHelp
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//
//______________________________________________________________________________
//==============================================================================


internal function showHelp(viewname:String, pluginid:String):void
{
	tabMessageWindow.selectedChild=mwHelpConsole;

	// resize console to 25% of page area height, unless it is already more than that
	var pheight:int=vdivBoxPageArea.height;	// total height

	if (tabMessageWindow.height < pheight*.25)
		{
		tabMessageWindow.height=uint(pheight*.25);
		}

	updateHelp(viewname, pluginid);
}


// auto follow the help as user navigates
internal function updateHelp(viewname:String, pluginid:String):void
{
		helpconsole.viewcontent=viewname;
		helpconsole.pluginid=pluginid;
		helpconsole.refreshData();
}
//______________________________________________________________________________
//==============================================================================
//                               handleSMStop
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================


internal function handleSMStop():void
{
	Alert.show(elang.getString("STR_APP_STOPTHEMESSSYSTWILLCAUS"),
		"",
		mx.controls.Alert.YES|mx.controls.Alert.NO,
		this,
		stopSMListener,
		IconsDialog.imgAttentionDialog);
}
//______________________________________________________________________________
//==============================================================================
//                              stopSMListener
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   eventObj: CloseEvent -
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================


internal function stopSMListener(eventObj:CloseEvent):void
{
	if (eventObj.detail==Alert.YES)
		{
		Alert.show(elang.getString("STR_APP_YOUCANRESTTHEMESSSYST"),
			"",
			mx.controls.Alert.OK,
			this,
			null,
			IconsDialog.imgAttentionDialog);
		dispatchEvent(new XMSMessagingEvent(XMSMessagingEvent.STOPPOLLING, {reason:"User Request via Tools"}));
		MessagingConsole.addEvent(MessagingConsole.TYPE_APP,
			 XMSConstants.GLOBAL_HEALTHSTAT_INFORMATION,
			"Stopping the messaging system at user request");
		}
}


//______________________________________________________________________________
//==============================================================================
//                           deviceChangeHandler
//------------------------------------------------------------------------------
// Device change handler that fires when the selected device list in the
// GDC changes.
//
// Input
// -----
//   dummy:* -
//
// Output
// ------
//   void -
//
//
//______________________________________________________________________________
//==============================================================================


internal function deviceChangeHandler(event:XMSEvent=null):void
{

	var icon:Class;
	var dtype:int=GData.selectedDeviceType;
	var plugin:String=GData.selectedDevicePluginID;
	// if init stage, don't do anything.  No need to check plugin since this is
	// a unique type.
	if (dtype==XMSConstants.DEVTYPE_XMSSTARTUP)
		{
		return;
		}
	if (currentState=="gui")
		{

		if (GData.pluginDeviceList[plugin][dtype]!=undefined)
			{
			// get the icon from the plugin hook
			var pref:IXMSPlugins=XMSUtils.getPluginReferencebyID(plugin);
			var iconset:Object=pref.getDeviceIcons(<device type={dtype}/>);
			icon=iconset.lrgicon;
			//icon=GData.pluginDeviceList[plugin][dtype].lrgicon;
			}
		else
			{
			icon=null;
			}

		MessagingWindow.out("<b>Device change detected</b>, type="+dtype+", plugin="+plugin,MessagingWindow.MWTYPE_DEBUG);

//    var lbldev:String=GData.selectedDeviceLength+' '+getSelectedDevicesString();
//    if ((plugin==AppConstants.PLUGINID)&& ((dtype==XMSConstants.DEVTYPE_WELCOMESCREEN)||(dtype==XMSConstants.DEVTYPE_SEARCH) ) )
//       {
//       lbldev=elang.getString("STR_APP_NONE");
//       }
		//lblSelDevices.text=lbldev;

		activateView(dtype, plugin, icon);
		}
}

//______________________________________________________________________________
//==============================================================================
//                                menuChange
//------------------------------------------------------------------------------
// Event handler that fires when someone clicks a menu option
//
// Input
// -----
//   event: MenuEvent -
//
// Output
// ------
//   void -
//
//
//______________________________________________________________________________
//==============================================================================
public function menuChange(event:MenuEvent):void
{
	// Set the role value for whatever was clicked.
	GData.currentRole=Number(event.item.@role);
	GData.currentMenuItemPluginViewID=event.item.@pluginviewid;
	GData.sourceMenuItemPluginViewID= (event.item.@sourcepluginviewid==undefined?event.item.@pluginviewid:event.item.@sourcepluginviewid);

	// Check the node for the pluginviewname and see if it is the current selectedindex,
	// and change if not
	var pid:String=event.item.@pluginviewid;				// get pluginid (viewname) associated with menu node
	var ind:int=Number(GData.pluginViewIndex[pid]);	// get index associated with pluginid

	// check the plugin viewstack index to see if we need to switch plugins for augmented menu
	// items from other plugins
	if (GData.currentPluginViewIndex!=ind)
		{
		vwstkPlugin.selectedIndex=ind;
		GData.currentPluginViewIndex=ind;
		GData.currentActivePluginID=pid;
		}
	var pagefornode:String=event.item.@pageview;
	if (pagefornode!="")
		{
		activatePage(pagefornode);
		}
}



//______________________________________________________________________________
//==============================================================================
//                               activateView
//------------------------------------------------------------------------------
// Function to change the view based on some event.  This can be a selected
// device change, or a button to go to the help or welcome screen, or a
// quick link to go to a certain page.
// A view is basically a menu bar with some component underneath it
// (ie a page).  So, a view is a) the menu items for the selected device
// and b) a page from the device's menu options, typically the default page.
//
//	A page is a component that can be viewed at any time based on
// some event.  Generally you must keep the page a valid option depending
// on the menu bar that is being displayed.
// Also you need to provide a label and icon for the view, which is displayed to
// the right of the menu bar.
//
// Input
// -----
//   devtype: String - device type
//
//   pageIcon: String - path to icon to show to the right of the menu bar
//
//   force:Boolean - whether to force a page change to either the default page for the menu
//   						item
// Output
// ------
//   void -
//
//
//______________________________________________________________________________
//==============================================================================


internal function activateView(devtype:int, pluginid:String, pageIcon:Class, force:Boolean=false):void
{

	CursorManager.removeBusyCursor();
	MessagingWindow.out("Activating menu for device: "+devtype,MessagingWindow.MWTYPE_DEBUG);
	var devicemenu:XMLList;

	// See if this devtype exists in the device/plugin table.  If not then the
	// server is showing us something the gui doesn't know how to deal with.
// if (XMSUtils.checkSupportedDevice(devtype)==false)
//    {
//    devtype=XMSConstants.DEVTYPE_UNSUPPORTED;
//    }
   //------------------------------------------------------//
	// Get the single or multiple menu items for this device
   //------------------------------------------------------//
	var bSingle:Boolean=true;

	if (XMSUtils.checkGUIReservedDevice(devtype)==false)
		{
		if (GData.selectedDeviceList.length>1)
			{
			bSingle=false;
			if (GData.selectedDeviceList.length>XMSConstants.BULK_SELECTION_THRESHOLD)
				{
				devicemenu=xmlMenuList.plugin.(@id==pluginid).device.(@type==devtype).bulk;
				}
			else
				{
				devicemenu=xmlMenuList.plugin.(@id==pluginid).device.(@type==devtype).multiple;
				}
			}
		else
			{
			devicemenu=xmlMenuList.plugin.(@id==pluginid).device.(@type==devtype).single;
			}
		}
	menuViews.enabled=true;		// reset to enabled...let plugins broadcast event to disable if needed for given view

	var tempdefpageview:XMLList=devicemenu..menuitem.(hasOwnProperty("@pageview")&&(@pageview==devicemenu.@defaultpageview));

	if (devicemenu.children().length() && tempdefpageview.@label!="")
		{
		menuViews.visible=true;
		oemhack(devicemenu[0]); // TEMPORARY HORRIBLE HACK TO ALTER OEM MENUS
		GData.xmlCurrentMenu=devicemenu;
		}
	else
		{
		menuViews.visible=false;
		}
   //-------------------------------------//
	// Set page header text
   //-------------------------------------//
	var ptitle:String=devicemenu.@pagetitle;
// lblPageType.text=elang.$(ptitle);
//	lblPageType.text=ptitle;
	// Set page header icon
//	imgPageType.source=pageIcon;

	// Set the viewstack for the plugins to the correct index.  Do
	// this based on the pluginviewid from the menu option
	if (XMSUtils.checkGUIReservedDevice(devtype)==false)
		{
		var pid:String="";

		// I need to check the new devicemenu xml structure to see if the currentMenuItemPluginViewID and
		// the currentViewnName are still available.  If not, then I need to reset the view to the default
		// for the devicemenu set...
		// NOTE:  this situation happens when
		// a) we change device types/plugins completely
		// b) the menus change from single to multiple and we lost some view that doesn't support multiple devices.
		// c) the user is looking at a plugin view that is not directly attached to a menu item (ex: firmware update view triggered
		//    by update mode, but the view name is part of the plugin and not anywhere in the menu structure)
		var bCheckViewStillAvailable:Boolean=false;
		var checkview:XMLList=devicemenu..menuitem.(hasOwnProperty("@pageview")&&hasOwnProperty("@pluginviewid")&&@pageview==GData.currentViewName&&@pluginviewid==GData.currentMenuItemPluginViewID);
		if (checkview.length()!=0)
			{
			bCheckViewStillAvailable=true;
			}

		// see if we changed device types, if so then we are gonna need
		// to pull the defaultpageview from the structure to see what plugin
		// it belongs to
		// vwstkPlugin.enabled=true;
		if ( (GData.selectedDeviceType==GData.activeDeviceType) && bCheckViewStillAvailable==false)
			{
			// Control here means that we are using multiple/bulk device menu, but the requested pageview
			// was not found, so disable the page area and show popup warning
			// vwstkPlugin.enabled=false;
			// Do this to handle generically, but some plugins may already be checking for this (sx) so I can't enable it
			XMSError.alertErrorMessage(elang.getString("STR_APP_THISPAGEISNOTSUPPWITHTHECURRNUMBOF"),IconsDialog.imgAttentionDialog);
			//pid=GData.currentMenuItemPluginViewID;
			}
			// see if we changed device types, if so then we are gonna need
			// to pull the defaultpageview from the structure to see what plugin
			// it belongs to

		if( (GData.selectedDeviceType!=GData.activeDeviceType)||(bCheckViewStillAvailable==false))
			{
			// We are changing device types OR the menu options have changed (single versus multiple)
			// Get the default view for the for the device and change to the correct pluginview (ie viewstack index) for the option.
			// We must remember that the option can be from any plugin...
			var defpageview:String=devicemenu.@defaultpageview;
			var defpageviewnode:XMLList=devicemenu..menuitem.(hasOwnProperty("@pageview")&&(@pageview==defpageview));
			//add by fred
			GData.currentRole=defpageviewnode.@role;	// update the global role based on forced view change
			//end
			pid=defpageviewnode.@pluginviewid;

			if (pid=="")
				{
				Alert.show("Developer Error:  Attempting to change view and cannot determine plugin id.  Make sure that the default view in the menus has a menuitem with a matching pageview attribute.");
				}

			GData.currentMenuItemPluginViewID=pid;
			MessagingWindow.out("Resetting to defaultpageview for this device's menu: type="+GData.selectedDeviceType,MessagingWindow.MWTYPE_DEBUG);

			// Added [BrandonB] 9/6/2011 so that clicking on a device in update mode and then one NOT in update mode (but same type) will
			// force refresh the default page view (ie summary).
			force=true;
			}
		else
			{
			pid=GData.currentMenuItemPluginViewID;
			}
		// get index for the pid
		var pindex:int=Number(GData.pluginViewIndex[pid]);
		// see if we are already in the plugin's view
		if (vwstkPlugin.selectedIndex!=pindex)
			{
			MessagingWindow.out("Plugin view id has been changed to:"+pid,MessagingWindow.MWTYPE_DEBUG);
			// no, we need to switch to the plugins view index
			vwstkPlugin.selectedIndex=pindex;
			GData.currentPluginViewIndex=pindex;
			GData.currentActivePluginID=pid;				// THIS IS A REALLY IMPORTANT LINE :)
			force=true;	// need to force a page change...
			}
		}
	// Here, check to see if the newly selected device is the same type
	// as what is currently being displayed.  If so, then don't force the
	// default page.  This allows the user to go to Sensors, for example,
	// on a blade and just click another blade to stay on the same page.

	// If the force flag is set OR if the selected device type is not the
	// same as the active device type....

// The "force" boolean is now set to true in the code above that checks selectedDeviceType and activeDeviceType along with the
// bCheckViewStillAvailable.  Checking it again is redundant, so now just check "force"
//	if ((force==true)||(GData.selectedDeviceType!=GData.activeDeviceType))
	if (force==true)
		{
		////add by fred
		GData.currentRole=devicemenu..menuitem.(hasOwnProperty("@pageview")&&(@pageview==defpageview)).@role;
		//end
		activatePage(String(devicemenu.@defaultpageview));
		}

	// WARNING ::: TYPE IS NO LONGER UNIQUE - you must use a combination of type and pluginid
	GData.activeDeviceType=GData.selectedDeviceType;

	// Broadcast page menu change
	dispatchEvent(new XMSEvent(XMSEvent.PAGEMENUCHANGE,{devicetype:devtype, pluginid:pluginid, single:bSingle}));

}

//______________________________________________________________________________
//==============================================================================
//                              closeAllPopups
//------------------------------------------------------------------------------
// Public function to close all popups for whatever reason (usually session
// expired)
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================
public function closeAllPopups():void
{
	// if you scope your popups to PopUpManagerChildList.POPUP
	// this is all you should have to check to clear all popups

	var bBreak:Boolean=false;


	// The code in the "while" loop may or may not work...I am leaving it here for reference...
	// but the only safe way to close all popups is to broadcast an application
	// wide event and for each popup to handle closing itself.
	dispatchEvent(new XMSEvent(XMSEvent.CLOSEALLPOPUPS));

	while ( (systemManager.popUpChildren.numChildren > 0)&&(bBreak==false))
		{
		// We must check the children to see which ones are actually popup windows.
		// This is because when a popup is made modal, Flex will insert the screen-wide
		// clicking "shield" called modalWindow behind the actual popup class.  This itself is
		// a popupChild, but since it is a FlexSprite we cannot remove it with the removePopup
		// function.  NOTE: I am going to assume here that if [0] is called "modalWindow" then
		// [1] is the actual class...

		for (var i:int=0;i<systemManager.popUpChildren.numChildren;i++)
			{
			var popupclass:Object=systemManager.popUpChildren.getChildAt(i);
			if (popupclass.name!="modalWindow")
				{
				bBreak=false;
				PopUpManager.removePopUp(IFlexDisplayObject(popupclass));
				break;
				}
			else
				{
				bBreak=true;
				}

			}
		}
}




internal function tempfunc():void
{
}


internal function tempfunc2():void
{
}
//______________________________________________________________________________
//==============================================================================
//                             simulateFailover
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================
internal function simulateFailover():void
{
	// Broadcast proper event and set global data flag.
	var node:XMLList=GData.xmllTasksTools..node.(hasOwnProperty("@compid") && @compid=="viewClustering");
	if (node.length() && GData.selectedTTId!="viewClustering")
		{
		node[0].@alertnotification="1";
		}
	dispatchEvent(new XMSEvent(XMSEvent.SHOWALERTBANNER,{text:elang.getString("STR_APP_FAILOEVENTDETECPLEASCHECKFAILOGTCLUSTNODESTATU")}));
	GData.alertEvent_FailoverOFFLINESIMULATION=true;	// indicator flag for offline simulation to the clustering page
}
//______________________________________________________________________________
//==============================================================================
//                             simulatePhysical
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================
internal function simulatePhysical():void
{
	// Broadcast proper event and set global data flag.
	var node:XMLList=GData.xmllTasksTools..node.(hasOwnProperty("@compid") && @compid=="viewPhysicalDisks");
	if (node.length() && GData.selectedTTId!="viewPhysicalDisks")
		{
		node[0].@alertnotification="1";
		}
	dispatchEvent(new XMSEvent(XMSEvent.SHOWALERTBANNER,{text:elang.getString("STR_APP_PHYSIDISKEVENTDETECPLEASCHECKSTORAEXPLOGTPHYSI")}));
	GData.alertEvent_PhysicalDiskOFFLINESIMULATION=true;	// indicator flag for offline simulation
}

internal function tempfuncstop(taskobj:Object):void
{
	Alert.show("Stop detected for task "+taskobj.tasknum +", id="+taskobj.id);
}


//______________________________________________________________________________
//==============================================================================
//                                easterEgg
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================


internal var eastereggcounter:int=0;
internal function easterEgg():void
{
	eastereggcounter++;
	if (eastereggcounter==10)
		{
		// enable global indicator
		GData.debugMode=true;
		// enable debug output to messaging window regardless of release type
		MessagingWindow.enableMessageType(MessagingWindow.MWTYPE_DEBUG,true);
		MessagingWindow.enableMessageType(MessagingWindow.MWTYPE_DEBUG_INIT,true);
		MessagingWindow.enableMessageType(MessagingWindow.MWTYPE_DEBUG_PERF,true);
		// show message with debug style
		MessagingWindow.out("Debug Mode Enabled",MessagingWindow.MWTYPE_DEBUG);

		MessagingConsole.addEvent(MessagingConsole.TYPE_APP,
				 XMSConstants.GLOBAL_HEALTHSTAT_INFORMATION,
				"Super secret debug mode enabled.");

		var x:Button=tabMessageWindow.getTabAt(tabMessageWindow.getChildIndex(mwDebugConsole));
		x.visible=x.enabled=x.includeInLayout=GData.debugMode;

		if (currentState=="login")
			{
			loginTextLabel="Debug Messages Enabled";
			}
		}
}


//______________________________________________________________________________
//==============================================================================
//                           flexShutDownHandler
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   None
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================


internal function flexShutDownHandler():void
{
	trace("Flex shut down started...");
	// Set cookie for session corresponding ot the current state
	if(getSessionCookie() && GData && GData.currentUser)
		{
		setSessionCookie(GData.currentUser.getSessionID(),
						  GData.currentUser.userName,
						  GData.currentUser.domain,
						  String(GData.currentUser.getPermissionLevel()),
						  GData.selectedDeviceList.toString(),
						  GData.currentViewName,
						  Xmit.getUser()
						 );
		}
}

//______________________________________________________________________________
//==============================================================================
//                           disablePluginAccess
//------------------------------------------------------------------------------
//
//
// Input
// -----
//   text: String -
//
//   description: String -
//
// Output
// ------
//   void -
//
//______________________________________________________________________________
//==============================================================================


public function disablePluginAccess(text:String, description:String):void
{
	ExternalInterface.call('hideUploader');
	disableCanvas.visible = true;
	vboxPageArea.enabled=false;
	lblBlockText.text = text;
	txtBlockDescription.text = description;
}*/