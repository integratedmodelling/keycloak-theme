<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
    <#if section = "header">
        <span class="label-sign-up">
            ${msg("pageExpiredTitle")}
        </span
    <#elseif section = "form">
        <#--  <p id="instruction1" class="instruction">  -->
        <div style="margin-top:2em">
            <div>
                <span class="label-sign-up">
                    ${msg('pageExpiredMsg1')}
                </span>
                <q-btn class="kh-link" id="loginRestartLink" label="${msg('doClickHere')}" flat no-caps href="${url.loginRestartFlowUrl}" style="{'margin-top':'-1px'}" />
            </div>
            <div>
                <span class="label-sign-up">
                    ${msg('pageExpiredMsg2')}
                </span>
                <q-btn class="kh-link" id="loginContinueLink" label="${msg('doClickHere')}" flat no-caps href="${url.loginAction}" />
            </div>
        </div>
            <#--  ${msg("pageExpiredMsg1")} <a id="loginRestartLink" href="${url.loginRestartFlowUrl}">${msg("doClickHere")}</a> .<br/>  -->
            <#--  ${msg("pageExpiredMsg2")} <a id="loginContinueLink" href="${url.loginAction}">${msg("doClickHere")}</a> .  -->
        <#--  </p>  -->
    </#if>
</@layout.registrationLayout>
