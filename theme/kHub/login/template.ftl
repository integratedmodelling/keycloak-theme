<#macro registrationLayout bodyClass="" displayInfo=false displayMessage=true displayRequiredFields=false>
  <!DOCTYPE html>
  <html <#if realm.internationalizationEnabled> lang="${locale.currentLanguageTag}"</#if>>

  <head>  
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" rel="stylesheet" type="text/css">
    <link href="https://cdn.jsdelivr.net/npm/quasar@2.15.3/dist/quasar.prod.css" rel="stylesheet" type="text/css">
    <link href="${url.resourcesPath}/css/style.css" rel="stylesheet" type="text/css">
    <link href="${url.resourcesPath}/css/app.css" rel="stylesheet" type="text/css">
    <link href="${url.resourcesPath}/css/font.css" rel="stylesheet" type="text/css">
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
${url.resourcesPath}
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
    <div id="au-layout" view="hHh lpR fFf" >
      <div class="au-container">
        <div class="au-fixed-center text-center au-container">
          <div class="au-logo-container ks-container " >
            <!-- banner -->
            <div class="au-logo"  wrapper-id="au-layout" >
              <#include "fragments/banner.ftl">                        
            </div>
            <div class="app-name au-app-name">
              k<span style="color:#d6151a">.</span>Hub
            </div>
          </div>
        </div>
  <div class="full-width column content-center au-form-container">
    <div class="au-wrapper">
    <#--  <div class="window-height window-width row justify-center bg-grey-4">  -->
      <!-- 
        Header 
      -->
      <#--  <div class="full-width row justify-center">  -->
        <#include "fragments/header.ftl">
        </div>
      </div>
      <!-- 
        Content 
      -->
      <#--  <div class="row justify-center" style="max-width: 500px;"> 
        <q-card class="full-width bg-white column justify-center">  -->
          <!-- 
            Header 
          -->
          <div class="full-width row justify-center">
            <#include "fragments/header.ftl">
          </div>
          <!-- form -->
          <div :class="{ ' q-pt-md q-pr-md q-pl-md': $q.screen.xs, 'q-pt-lg q-pr-lg q-pl-lg' : $q.screen.gt.xs }">
        <#nested "form">
          </div>
          <!-- social providers -->
          <#-- <#if social.providers??>
            <#nested "socialProviders">
    </#if> -->
    <#-- </q-card> -->
      <!-- global options -->
      <#-- <div :class="{ 'q-pt-xs': $q.screen.xs, 'q-pt-sm': $q.screen.gt.xs }">
        <#include "fragments/options.ftl">
          </div> -->
          </div>
          <!-- 
        Footer 
      -->
          <div class="full-width row justify-center">
            <#-- <#include "fragments/footer.ftl"> -->
          </div>
          </div>
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
          <!-- Install Quasar language pack -->
          <#--  <#if properties.locales?has_content>
            <#list properties.locales?split(',') as locale>
              <script>
              Quasar.lang.set(Quasar.lang.${locale})
              </script>
            </#list>
          </#if>  -->
          </body>

  </html>
</#macro>