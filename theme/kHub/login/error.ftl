<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=false; section>
    <#if section = "header">
        ${kcSanitize(msg("errorTitle"))?no_esc}
    <#elseif section = "form">
      <div id="kc-error-message">
        <q-banner rounded class="doc-note doc-note--danger" >
          <#--  <div class="doc-note__title  ">{{ notification ? notification.title ? notification.title : $t(`titles.${notification.tag.name}`) : title }}</div>  -->
          <div class="row items-center">
            <div class="col-2 q-mt-xs">
              <q-icon name="warning_amber" size="1.75em"></q-icon>
            </div>
            <div class="col">            
              ${kcSanitize(message.summary)?no_esc}
            </div>            
          </div>
        </q-banner>
        <div class="row items-center justify-center">
          <#--  <q-btn flat :label="$t('labels.dismiss')" @click="closeConfirm ? open = true : dismissFunction"/>  -->
          <#if skipLink??>
          <#else>
              <#if client?? && client.baseUrl?has_content>
              <div>
                  <#--  <p><a id="backToApplication" href="${client.baseUrl}">${kcSanitize(msg("backToApplication"))?no_esc}</a></p>  -->
                  <q-btn 
              id="backToApplication" 
              name="backToApplication" 
              label="${kcSanitize(msg("backToApplication"))?no_esc}" 
              color="k-main"  
              href="${client.baseUrl}" 
              class="full-width" 
              unelevated/>
              </div>
              </#if>
          </#if>
        </div>
      </div>
    </#if>
</@layout.registrationLayout>