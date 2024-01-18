function extractProjectTitle(rowTitle) {
    // 대괄호 안의 값을 추출
    var match = /\[([^\]]+)\]/.exec(rowTitle);
  
    // 매칭된 값이 있다면 대괄호 안의 값을 반환, 없다면 null 반환
    return match ? match[1] : null;
  }
  
  function resetLog2Sheet() {
    // 스프레드시트와 시트 가져오기
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet1 = spreadsheet.getSheetByName('로그1');
    var sheet2 = spreadsheet.getSheetByName('로그2');
  
    // 로그1 시트의 데이터 읽기
    var data = sheet1.getDataRange().getValues();
    // 로그 1 시트의 열 개수
    var sheet1Column = data[0].length
    // 로그 1 시트의 행 개수
    var sheet1Row = data.length
    var startColumn = 1;
    var startRow = 2;
  
    // 로그2 시트에 기록할 데이터 배열 초기화
    var logData = [];
  
  for(var j = startRow - 1; j < sheet1Row; j ++){
    var rowData = [];
    for(var i = startColumn - 1; i < sheet1Column; i ++){
        if(i < 3) {
          rowData.push(data[j][i]);
        } else {
          if(data[j][i] !== '진행안함' && data[j][i] !== ''){
            var projectTitle = extractProjectTitle(data[0][i]);
            rowData.push(projectTitle);
            rowData.push(data[j][i]);
            logData.push(rowData.slice())
            rowData.pop();
            rowData.pop();
          }
      }
    }
  }
  sheet2.getRange(2, 1, logData.length, logData[0].length).setValues(logData);
  
  }
  