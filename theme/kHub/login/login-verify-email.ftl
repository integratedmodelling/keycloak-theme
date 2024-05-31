<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=true; section>
    <#if section = "header">
      hola  ${msg("emailVerifyTitle")}
    <#elseif section = "form">
      <div class="full-width column content-center au-form-container">
        <div class="q-col-gutter-y-md" style="min-width: 70%; max-width: 70%;" >
          <div class="au-top-text q-my-md" >
              <q-icon name="mark_email_read" size="3em"></q-icon>
              <#--  <h6 class="q-my-sm">Updated!</h6>  -->
          </div>
          <div class="au-top-info" style="text-align:justify">
            <span>
              ${msg("emailVerifyInstruction1",user.email)?keep_before(user.email)}
              ${msg("emailVerifyInstruction1",user.email)?keep_after(user.email)}
            </span>
          </div>
          <div class="au-top-info q-pt-xs" style="text-align:center">
            <span><b>${user.email}</b></span>
          </div>
          <#--  <div>
            <q-btn  color="k-main" label="${msg('doLogin')}" class="full-width" href="${url.loginRestartFlowUrl}"
              unelevated>
            </q-btn>
          </div>  -->
        </div>
      </div>
      <#--  <div class="au-top-text">
        <span class="au-top-content">Change email address</span>
      </div>
      <header role="banner" class="pf-c-page__header"></header>
      <div class="au-top-info q-py-xl">
        <span>${msg("emailVerifyInstruction1",user.email)}</span>
      </div>
      <div/>  -->
        <#--  <p class="instruction">${msg("emailVerifyInstruction1",user.email)}</p>   -->
    <#elseif section = "info">
    hola
        <p class="instruction">
            ${msg("emailVerifyInstruction2")}
            <br/>
            <a href="${url.loginAction}">${msg("doClickHere")}</a> ${msg("emailVerifyInstruction3")}
        </p>
    </#if>
    
</@layout.registrationLayout>
