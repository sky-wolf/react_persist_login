<select id='FontSize' onChange={() => {
            if(document.getSelection.toString)
            {
                var S=window.getSelection();
                var x = document.getElementById("FontSize").value;
                document.execCommand("fontSize", false, x);
            }
        }}>
<option value="12px">12</option>
<option value="14px">14</option>
<option value="16px">16</option>
<option value="18px">18</option>
<option value="20px">20</option>
<option value="24px">24</option>
<option value="30px">30</option>
<option value="36px">36</option>
<option value="48px">48</option>
<option value="60px">60</option>
<option value="72px">72</option>
<option value="96px">96</option>
<option value="128px">128</option>
</select>