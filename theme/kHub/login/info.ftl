<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=false; section>
    <#if section = "header">
        <#if messageHeader??>
        ${messageHeader}
        <#else>
        ${message.summary}
        </#if>
    <#elseif section = "form">
    <div id="kc-info-message">
    <#assign messageSummary = message.summary>
    <#assign confirmEmailAddressVerification = msg("confirmEmailAddressVerification")?keep_before("{0}")>    
    <#assign emailVerifiedMessage = msg("emailVerifiedMessage")?keep_before("{0}")> 
    <#assign emailVerifiedAlreadyMessage = msg("emailVerifiedAlreadyMessage")>   
    <#if messageSummary?starts_with(confirmEmailAddressVerification)>
      <div class="au-top-text">
        <span class="au-top-content">
          Update email address
        </span>
      </div>  
      <div class="au-top-info q-py-xl">
        <span>${message.summary}</span>
      </div>  
    <#elseif messageSummary?starts_with(emailVerifiedMessage)>
      <div class="full-width column content-center au-form-container">
        <div class="q-col-gutter-y-md" style="min-width: 70%; max-width: 70%;" >
          <div class="au-top-text q-my-md" >
              <q-icon name="check_circle" size="3em"></q-icon>
              <h6 class="q-my-sm">Updated!</h6>
          </div>
          <div class="au-top-info" style="text-align:center !important">
            <span>${messageSummary}</span>
          </div>
          <div>
            <q-btn  color="k-main" label="${msg('doLogin')}" class="full-width" href="${url.loginRestartFlowUrl}"
              unelevated>
            </q-btn>
          </div>
        </div>
      </div>
    <#elseif messageSummary?starts_with(emailVerifiedAlreadyMessage)>
      <div class="au-top-info q-py-xl">
        <q-banner rounded class="doc-note doc-note--warning" >
          <div class="row items-center">
            <div class="col-2 q-mt-xs">
              <q-icon name="error_outline" size="1.75em"></q-icon>
            </div>
            <div class="col">            
              ${message.summary}
            </div>            
          </div>
        </q-banner>
      </div>
    <#else>
    <div class="au-top-info q-py-xl">
        <q-banner rounded class="doc-note doc-note--info" >
          <div class="row items-center">
            <div class="col-2 q-mt-xs">
              <q-icon name="error_outline" size="1.75em"></q-icon>
            </div>
            <div class="col">            
              ${message.summary}
            </div>
            <div>
              <#--  <q-btn flat :label="$t('labels.dismiss')" @click="closeConfirm ? open = true : dismissFunction"/>  -->
               <#if requiredActions??>
                   <#list requiredActions>: <b><#items as reqActionItem>${kcSanitize(msg("requiredAction.${reqActionItem}"))?no_esc}<#sep>, </#items></b>
                   </#list>
               <#else>
               </#if>              
            </div>
          </div>
        </q-banner>
      </div>
      </#if>
      <#if skipLink??>
      <#else>
        <div class="au-btn-container q-pb-xl">
          <#if pageRedirectUri?has_content>
              <#--  <p><a href="${pageRedirectUri}">${kcSanitize(msg("backToApplication"))?no_esc}</a></p>  -->
              <#assign backToApplication = msg('backToApplication')?replace('&raquo;','')?replace('&laquo;','')>
               <q-btn 
                  id="backToApplication" 
                  name="backToApplication" 
                  label="${backToApplication}" 
                  color="k-main"  
                  @href="${pageRedirectUri}" 
                  class="full-width" 
                  unelevated/>
          <#elseif actionUri?has_content>
              <#--  <p><a href="${actionUri}">${kcSanitize(msg("proceedWithAction"))?no_esc}</a></p>
              ${kcSanitize(msg("proceedWithAction"))?no_esc}  -->
              <#assign proceedWithAction = msg('proceedWithAction')?replace('&raquo;','')?replace('&laquo;','')>
              <q-btn 
                  id="proceedWithAction" 
                  name="proceedWithAction"                     
                  label="${proceedWithAction}"
                  color="k-main"  
                  href=${actionUri}
                  class="full-width" 
                  unelevated/>
          <#elseif (client.baseUrl)?has_content>
            <#assign backToApplication = msg('backToApplication')?replace('&raquo;','')?replace('&laquo;','')>
               <q-btn 
                  id="backToApplication" 
                  name="backToApplication" 
                  label="${backToApplication}" 
                  color="k-main"  
                  @href="${client.baseUrl}" 
                  class="full-width" 
                  unelevated/>
          </#if>
        </div>
       </#if>
      </div>
    </#if>
</@layout.registrationLayout>