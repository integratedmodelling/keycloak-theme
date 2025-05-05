<#macro registrationLayout bodyClass="" displayInfo=false displayMessage=true displayRequiredFields=false>
  <!DOCTYPE html>
  <html <#if realm.internationalizationEnabled> lang="${locale.currentLanguageTag}"</#if>>

  <head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" rel="stylesheet" type="text/css">    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://cdn.jsdelivr.net/npm/quasar@2.15.3/dist/quasar.prod.css" rel="stylesheet" type="text/css">
    <link href="${url.resourcesPath}/css/style.css" rel="stylesheet" type="text/css">
    <link href="${url.resourcesPath}/css/app.css" rel="stylesheet" type="text/css">
    <link href="${url.resourcesPath}/css/font.css" rel="stylesheet" type="text/css">
    <link href="${url.resourcesPath}/css/login.css" rel="stylesheet" type="text/css">
    <link rel="icon" href="${url.resourcesPath}/img/favicon.ico"/>

    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="robots" content="noindex, nofollow">
    <#if properties.meta?has_content>
      <#list properties.meta?split(' ') as meta>
      <meta name="${meta?split('==')[0]}" content="${meta?split('==')[1]}"/>
      </#list>
    </#if>
    <title>
      ${msg("loginTitle",(realm.displayName!''))}
    </title>
    <link rel="icon" href="${url.resourcesPath}/img/favicon.ico" />
    <#if properties.stylesCommon?has_content>
      <#list properties.stylesCommon?split(' ') as style>
        <link href="${url.resourcesCommonPath}/${style}" rel="stylesheet" />
      </#list>
    </#if>
    <#if properties.styles?has_content>
      <#list properties.styles?split(' ') as style>
        <link href="${url.resourcesPath}/${style}" rel="stylesheet" />
      </#list>
    </#if>
    <#if properties.scripts?has_content>
      <#list properties.scripts?split(' ') as script>
        <script src="${url.resourcesPath}/${script}" type="text/javascript"></script>
      </#list>
    </#if> 
  </head>
  <body>
  
    <div id="q-app" >
    <#--  <#include "fragments/header.ftl">  -->
    <div id="au-layout" view="hHh lpR fFf" >
      <div class="au-container">
        <div class="au-fixed-center text-center au-container">
          <#include "fragments/header.ftl">
          <div class="au-content">
            <div class="full-width column content-center au-container">
              <div class="au-wrapper">                            
                <#include "fragments/banner.ftl">
                <#nested "form">
                <#nested "socialProviders">
              </div>
            </div>
          </div>
          <#include "fragments/footer.ftl">          
        </div>
      </div>
    </div>
    
    <!-- 
      Use Vue and Quasar with UMD version
      For more information, refer to https://quasar.dev/start/umd#installation
    -->
    <script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/quasar@2.15.3/dist/quasar.umd.prod.js"></script>
    <script src="${url.resourcesPath}/js/config.js"></script>
    <script src="${url.resourcesPath}/js/quasar.js"></script>
    <#-- App-initiated actions should not see warning messages about the need to complete the action -->
    <#-- during login.     -->
    <#if displayMessage && message?has_content && (message.type !=' warning' || !isAppInitiatedAction??)>
      <script>        
        var message = "${kcSanitize(message.summary)?no_esc}"
        var type = "${message.type}"

        if (type === 'success') {
          type = 'positive'
        } else if (type === 'error') {
          type = 'negative'
        }
        Quasar.Notify.create({
          message: message,
          type: type
        })         
      </script> 
    </#if>
    
    <!-- Install Quasar language pack -->
    <#if properties.locales?has_content>
      <#list properties.locales?split(',') as locale>
        <script>
        Quasar.lang.set(Quasar.lang.${locale})
        </script>
      </#list>
    </#if>
  </body>

  </html>
  
</#macro>
