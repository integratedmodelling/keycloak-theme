<#macro logoutOtherSessions>
    <div id="kc-form-options" class="${properties.kcFormOptionsClass!}">
        <div class="${properties.kcFormOptionsWrapperClass!}">
            <div class="au-btn-container au-bottom-links row justify-center items-center full-width q-gutter-sm">
                <input class="kh-checkbox" type="checkbox" id="logout-sessions" name="logout-sessions" value="on" checked >
                <label class="kh-checkbox-label" for="logout-sessions" >
                    ${msg("logoutOtherSessions")}
                </label>
            </div>
        </div>
    </div>
</#macro>
