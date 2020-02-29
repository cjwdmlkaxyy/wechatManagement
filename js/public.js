const Token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU4MjkxMDc1NCwiY3JlYXRlZCI6MTU4Mjg2NzU1NDU0MCwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5IjoiYml6OnBvcnRhbEluZm86ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJiaXo6cHJvcGVydGllczp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6ImJpejpwcm9wZXJ0aWVzOmFkZCJ9LHsiYXV0aG9yaXR5IjoiYml6OnBvcnRhbEluZm86YWRkIn0seyJhdXRob3JpdHkiOiJiaXo6bWVtYmVyQ29tcGFueTphc3NpZ24ifSx7ImF1dGhvcml0eSI6InN5czptZW51OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnVzZXI6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6ZWRpdCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6dmlldyJ9LHsiYXV0aG9yaXR5IjoiYml6Om1lbWJlclVzZXI6dmlldyJ9LHsiYXV0aG9yaXR5IjoiYml6OnByb3BlcnRpZXM6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJiaXo6cHJvcGVydGllczplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptZW51OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkaWN0OmFkZCJ9LHsiYXV0aG9yaXR5IjoiYml6Om1lbWJlclVzZXI6YWRkIn0seyJhdXRob3JpdHkiOiJiaXo6cG9ydGFsSW5mbzplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTphZGQifSx7ImF1dGhvcml0eSI6ImJpejptZW1iZXJDb21wYW55OmVkaXQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OmVkaXQifSx7ImF1dGhvcml0eSI6ImJpejptZW1iZXJDb21wYW55OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5IjoiYml6Om1lbWJlclVzZXI6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJiaXo6bWVtYmVyVXNlcjplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOmRlbGV0ZSJ9LHsiYXV0aG9yaXR5IjoiYml6Om1lbWJlclVzZXI6YXBwcm92ZSJ9LHsiYXV0aG9yaXR5IjoiYml6OnBvcnRhbEluZm86dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOm1lbnU6ZWRpdCJ9LHsiYXV0aG9yaXR5IjoiYml6Om1lbWJlckNvbXBhbnk6YWRkIn0seyJhdXRob3JpdHkiOiJiaXo6bWVtYmVyQ29tcGFueTp2aWV3In1dfQ.J9Zw7Hn3GOQtlu4dkFkMrt9cL8ITNPcbl_Zjux8NHlSa-eHoFGbPaR0S07G08PfA50WF_8zJMNa84GzUTuCYgw'
const url = 'http://ghwby4.natappfree.cc';
const JSESSIONID = '45C65750C94DB84BAC60C848053556A8';

/**
 * 加载层
 *
 * @param icon
 * @returns {*}

 */
function showLoading() {
    return layer.load(1, {
        shade: [0.1,'#000'] //0.1透明度的白色背景
    });
}

/*******public function*********/
function loadXMLDoc(url) {
    $('#page_content').empty();
    $.ajax({
        type: 'GET',
        url: url+ '.html',
        success: function (data) {
            $('#page_content').append(data)
        }
    });
    return false;
}