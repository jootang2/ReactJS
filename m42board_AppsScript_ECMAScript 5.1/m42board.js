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
        if(i === 1){
          var userNumber = data[j][i].split(" ")[0];
          var userName = data[j][i].split(" ")[1];
          rowData.push(userNumber);
          rowData.push(userName)
        } else rowData.push(data[j][i]);
      } else {
        if(data[j][i] !== '진행안함' && data[j][i] !== '' && !data[j][i].includes("[메모]")){
          var projectTitle = extractProjectTitle(data[0][i]);
          if( projectTitle !== null){
            rowData.push(i-2);
            rowData.push(data[j][i][0]);
            logData.push(rowData.slice())
            rowData.pop();
            rowData.pop();
          }
        }
    }
  }
}
sheet2.getRange(2, 1, logData.length, logData[0].length).setValues(logData);
}



function resetProjectSheet() {
  // 스프레드시트와 시트 가져오기
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = spreadsheet.getSheetByName('로그1');
  var sheet2 = spreadsheet.getSheetByName('프로젝트');

  // 로그1 시트의 데이터 읽기
  var data = sheet1.getDataRange().getValues();
  // 로그 1 시트의 열 개수
  var sheet1Column = data[0].length
  // 로그 1 시트의 행 개수
  var startColumn = 4;

  // 프로젝트 시트에 기록할 데이터 배열 초기화
  var logData = [];

  for(var i = startColumn - 1; i < sheet1Column; i ++){
    var rowData = [];
    var projectTitle = extractProjectTitle(data[0][i]);
    if(projectTitle !== null){
      rowData.push(i-2);
      rowData.push(projectTitle);
      logData.push(rowData)
    }
  }
  console.log(logData)
sheet2.getRange(2, 1, logData.length, logData[0].length).setValues(logData);
}



function groupDataByProjectId(data) {
  var groupedData = {};

  // 데이터를 순회하면서 프로젝트ID를 기준으로 그룹화합니다.
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var projectId = row[4]; // 프로젝트ID는 세 번째 열에 위치합니다.

    // 그룹이 없으면 새로운 그룹을 생성합니다.
    if (!groupedData[projectId]) {
      groupedData[projectId] = [];
    }

    // 해당 그룹에 데이터를 추가합니다.
    groupedData[projectId].push({
      name: row[2],         // 이름
      team: row[3],         // 팀
      workTime: row[5]       // 업무 시간
    });
  }

  return groupedData;
}

// 기여도를 계산하고 출력하는 함수
function printContribution(groupedData) {
  var output = [['프로젝트ID', '이름', '기여도']];
  
  // 그룹화된 데이터를 순회하면서 기여도를 계산하고 결과를 출력합니다.
  for (var projectId in groupedData) {
    var projectMembers = groupedData[projectId];

    for (var i = 0; i < projectMembers.length; i++) {
      var member = projectMembers[i];
      var totalWorkTime = calculateTotalWorkTime(projectMembers);
      var contribution = (member.workTime / totalWorkTime) * 100;
      contribution = contribution.toFixed(2);

      // 결과를 출력 배열에 추가합니다.
      output.push([projectId, member.name, contribution]);
    }
  }

  // "기여도" 시트에 결과를 출력합니다.
  var resultSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("기여도");
  resultSheet.getRange(1, 1, output.length, output[0].length).setValues(output);
}

// 팀원의 전체 작업 시간을 계산하는 함수
function calculateTotalWorkTime(members) {
  var totalWorkTime = 0;

  for (var i = 0; i < members.length; i++) {
    totalWorkTime += members[i].workTime;
  }

  return totalWorkTime;
}

function resetContributionSheet() {
  // Google Sheets에서 "로그2" 시트를 가져옵니다.
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("로그2");

  // 데이터를 가져옵니다.
  var data = sheet.getDataRange().getValues();

  // 프로젝트ID를 기준으로 데이터를 그룹화합니다.
  var groupedData = groupDataByProjectId(data);

  // 기여도를 계산하고 결과를 출력합니다.
  printContribution(groupedData);
}

