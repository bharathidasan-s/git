import { Injectable } from '@angular/core';
import * as pluginConst from './PluginConstants';

@Injectable()
export class PluginUtilsService {

	constructor() { }

	//==============================================================================
	//                    PluginUtils::registerLanguageFile
	//------------------------------------------------------------------------------
	//
	//
	// Input
	// -----
	//   elangobj: ELang -
	//
	// Output
	// ------
	//   void -
	//
	//______________________________________________________________________________
	//==============================================================================
	// public registerLanguageFile(elangobj:ELang):void
	public registerLanguageFile(): void {
		//elang=elangobj;
	}

	//______________________________________________________________________________
	//==============================================================================
	//                     PluginUtils::translateErrorCode
	//------------------------------------------------------------------------------
	//
	//
	// Input
	// -----
	//   errcode: Number -
	//
	// Output
	// ------
	//   String -
	//
	//______________________________________________________________________________
	//==============================================================================

	public translateErrorCode(errcode: number): string {

		var retstr: string = '';

		switch (errcode) {
			// device specific cc
			case pluginConst.CC_VM_TEMPL_DEL_FAILED:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_VM_TEMPL_DEL_FAILED");
				break;
			case pluginConst.CC_COLLECTION_MODIFICATION_FAILED:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_COLLECTION_MODIFICATION_FAILED");
				break;
			//----- VM Image
			case pluginConst.CC_VM_IN_TEMPLATE_PROGRESS:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_VM_IN_TEMPLATE_PROGRESS");
				break;
			case pluginConst.CC_VM_SYSPREP_ALREADY:
				// retstr=elang.getString("STR_PLUGINUTILS_VM_SYSPREP_ALREADY");
				break;
			case pluginConst.CC_VM_REQ_REBOOT:
				// retstr=elang.getString("STR_PLUGINUTILS_VM_REQ_REBOOT");
				break;
			case pluginConst.CC_HOST_LOGIN_FAILED:
				// retstr=elang.getString("STR_PLUGINUTILS_HOST_LOGIN_FAILED");
				break;
			case pluginConst.CC_VM_LOGIN_FAILED:
				// retstr=elang.getString("STR_PLUGINUTILS_VM_LOGIN_FAILED");
				break;
			case pluginConst.CC_VM_ISO_MOUNT_FAILED:
				// retstr=elang.getString("STR_PLUGINUTILS_VM_ISO_MOUNT_FAILED");
				break;
			case pluginConst.CC_VM_SYSPREP_FAILED:
				// retstr=elang.getString("STR_PLUGINUTILS_VM_SYSPREP_FAILED");
				break;
			case pluginConst.CC_VM_WINDOWS_UPDATE_FAILED:
				// retstr=elang.getString("STR_PLUGINUTILS_VM_WINDOWS_UPDATE_FAILED");
				break;
			case pluginConst.CC_VM_START_UP_FAILED:
				// retstr=elang.getString("STR_PLUGINUTILS_VM_START_UP_FAILED");
				break;
			case pluginConst.CC_INVALID_INPUT_PARAMETERS:
				// retstr=elang.getString("STR_PLUGINUTILS_INVALID_INPUT_PARAMETERS");
				break;
			case pluginConst.CC_USER_NOT_IN_COLLECTION:
				// retstr=elang.getString("STR_PLUGINUTILS_THISUSERISNOTPARTOFTHECOLLEUSERLIST");
				break;
			case pluginConst.CC_VM_TEMPLATE_NAME_ALREADY_AVAILABLE:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_VM_TEMPLATE_NAME_ALREADY_AVAILABLE");
				break;
			case pluginConst.CC_VM_TEMPLATE_NAME_CANNOT_BE_SAME_AS_VMNAME:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_VM_TEMPLATE_NAME_CANNOT_BE_SAME_AS_VMNAME");
				break;
			case pluginConst.CC_VM_TEMPLATE_IS_ALREADY_USED:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_VM_TEMPLATE_IS_ALREADY_USED");
				break;
			case pluginConst.CC_HARDWARE_PROFILENAME_ALREADY_EXIST:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_HARDWARE_PROFILENAME_ALREADY_EXIST");
				break;
			case pluginConst.CC_OS_PROFILENAME_ALREADY_EXIST:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_OS_PROFILENAME_ALREADY_EXIST");
				break;
			case pluginConst.CC_DISK_SPACE_NOT_AVAI:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_DISK_SPACE_NOT_AVAI");
				break;
			case pluginConst.SWUPDATE_USER_ALREADY_ASSIGNED_TO_ANOTHER_VM:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_USER_ALREADY_ASSIGNED_TO_ANOTHER_VM");
				break;
			case pluginConst.CC_HOST_SERVICE_NOTINSTALLED:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_HOST_SERVICE_NOTINSTALLED");
				break;
			//ISO error codes
			case pluginConst.CC_ISO_IMAGE_MOUNT_FAILED:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_ISO_IMAGE_MOUNT_FAILED");
				break;
			case pluginConst.CC_ISO_IMAGE_UNMOUNT_FAILED:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_ISO_IMAGE_UNMOUNT_FAILED");
				break;
			case pluginConst.CC_FAILED_GET_IMAGE_PROPERTIES:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_FAILED_GET_IMAGE_PROPERTIES");
				break;
			case pluginConst.CC_ATTEMPT_COPY_IMAGE_REPOSITORY_FAILED:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_ATTEMPT_COPY_IMAGE_REPOSITORY_FAILED");
				break;
			case pluginConst.CC_INVALID_SHARE_CREDENTIAL:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_INVALID_SHARE_CREDENTIAL");
				break;
			case pluginConst.CC_OSIMAGE_DISPLAYNAME_NO_AVAILABLE:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_OSIMAGE_DISPLAYNAME_NO_AVAILABLE");
				break;
			case pluginConst.CC_SHARE_NETWORK_PATH_NOT_FOUND:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_SHARE_NETWORK_PATH_NOT_FOUND");
				break;
			case pluginConst.CC_PHYSICAL_PATH_ACCESS_FAILED:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_PHYSICAL_PATH_ACCESS_FAILED");
				break;
			case pluginConst.CC_SHARE_PATH_ACCESS_FAILED:
				// retstr=elang.getString("STR_PLUGINUTILS_CC_SHARE_PATH_ACCESS_FAILED");
				break;

			default:
				retstr = "Unknown DCM error code" + "  [" + errcode + "]";
				// retstr="Unknown DCM error code"+"  ["+XMSUtils.getHex(errcode)+"]";
				break;

		}
		return retstr;
	}//end translateErrorCode method

}//end root