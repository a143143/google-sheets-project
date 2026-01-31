/*function doGet(e) {
  return HtmlService.createTemplateFromFile("index")
                    .evaluate()
                    .setTitle("Student Result Portal");
}

// Include partial HTML files if needed
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// Function to search student
function sub(v) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Sheet1");
    if (!sheet) return "Error: Sheet 'Sheet1' not found.";

    var lr = sheet.getLastRow();
    var found = false;

    for (var i = 2; i <= lr; i++) {
      var regNo = sheet.getRange(i, 1).getValue();
      if (v.roll == regNo) {
        found = true;
        var name = sheet.getRange(i, 2).getValue();
        var mark = sheet.getRange(i, 3).getValue();
        var CLASS_PERFORMANCE = sheet.getRange(i, 4).getValue();
        var TOTAL_MARK = sheet.getRange(i, 5).getValue();
       
        
        return `
          <style>
            table {border-collapse: collapse; width: 70%; margin: 20px auto; font-family: Arial; font-size: 15px; text-align: center;}
            th {background-color: #4CAF50; color: white; padding: 10px;}
            td {border: 1px solid #999; padding: 8px;}
            .pass { color: green; font-weight: bold; }
            .fail { color: red; font-weight: bold; }
          </style>

          <table>
            <tr><th colspan='2'><h3>Student Result</h3></th></tr>
            <tr><td><b>Reg. No.</b></td><td>${v.roll}</td></tr>
            <tr><td><b>Name</b></td><td>${name}</td></tr>
            <tr><td><b>mark</b></td><td>${mark}</td></tr>
            <tr><td><b>mark</b></td><td>${CLASS_PERFORMANCE}</td></tr>
            <tr><td><b>mark</b></td><td>${TOTAL_MARK}</td></tr>
            
          
            
            <tr><td><b>Status</b></td><td class='${status=="Pass"?"pass":"fail"}'>${status}</td></tr>
          </table>`;
      }
    }

    if (!found) {
      return "<p style='color:red;text-align:center;'>Roll Number not found.</p>";
    }
  } catch (err) {
    return "Error: " + err.message;
  }
}

function doGet(e) {
  return HtmlService.createTemplateFromFile("index")
                    .evaluate()
                    .setTitle("Student Result Portal");
}

// Include partial HTML files if needed
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// Function to search student
function sub(v) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Sheet1");
    if (!sheet) return "Error: Sheet 'Sheet1' not found.";

    var lr = sheet.getLastRow();
    var found = false;

    for (var i = 2; i <= lr; i++) {
      var regNo = sheet.getRange(i, 1).getValue();
      if (v.roll == regNo ) {
        found = true;

        var name = sheet.getRange(i, 2).getValue();
        var class_ = sheet.getRange(i, 3).getValue();
        var your_mark = sheet.getRange(i, 4).getValue();
        var classPerformance = sheet.getRange(i, 4).getValue();
        var totalMark = sheet.getRange(i, 5).getValue();
        var maximum_mark = sheet.getRange(i, 2).getValue();
        var status = sheet.getRange(i, 6).getValue(); // ✅ Added this line

        return `
          <style>
            table {border-collapse: collapse; width: 70%; margin: 20px auto; font-family: Arial; font-size: 15px; text-align: center;}
            th {background-color: #4CAF50; color: white; padding: 10px;}
            td {border: 1px solid #999; padding: 8px;}
            .pass { color: green; font-weight: bold; }
            .fail { color: red; font-weight: bold; }
          </style>

          <table>
            <tr><th colspan='2'><h3>Student Result</h3></th></tr>
            <tr><td><b>Reg. No.</b></td><td>${v.roll}</td></tr>
            <tr><td><b>Name</b></td><td>${name}</td></tr>
            <tr><td><b>Mark</b></td><td>${class_}</td></tr>
            <tr><td><b>Mark</b></td><td>${your_mark}</td></tr>
            <tr><td><b>Class Performance</b></td><td>${classPerformance}</td></tr>
            <tr><td><b>Total Mark</b></td><td>${totalMark}</td></tr>
            <tr><td><b>Total Mark</b></td><td>${maximum_mark}</td></tr>
            <tr><td><b>Status</b></td><td class='${status.toLowerCase()=="passed"?"pass":"fail"}'>${status}</td></tr>
          </table>`;
      }
    }

    if (!found) {
      return "<p style='color:red;text-align:center;'>Roll Number not found.</p>";
    }
  } catch (err) {
    return "Error: " + err.message;
  }
}
*/
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile("index")
                    .setTitle("Student Result Portal");
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// 🔍 Search student by both Register No and Class
function sub(v) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Sheet1");
    if (!sheet) return "Error: Sheet 'Sheet1' not found.";

    var lr = sheet.getLastRow();
    var found = false;

    for (var i = 2; i <= lr; i++) {
      var regNo = sheet.getRange(i, 1).getValue();        // Column A - Register No
      var studentClass = sheet.getRange(i, 3).getValue(); // Column C - Class

      // ✅ Match both Register No and Class
      if (String(v.roll).trim() == String(regNo).trim() &&
          String(v.className).trim() == String(studentClass).trim()) {

        found = true;

        var name = sheet.getRange(i, 2).getValue();            // Column B - Name
        var yourMark = sheet.getRange(i, 4).getValue();        // Column D - Your Mark
        var classPerformance = sheet.getRange(i, 5).getValue();// Column E - Class Performance
        var totalMark = sheet.getRange(i, 6).getValue();
        var max_mark = sheet.getRange(i, 7).getValue(); 
              // Column F - Total Mark
        var status = sheet.getRange(i, 8).getValue();          // Column G - Status

        return `
          <style>
            table {
              border-collapse: collapse;
              width: 70%;
              margin: 20px auto;
              font-family: Arial;
              font-size: 15px;
              text-align: center;
            }
            th {
              background-color: #4CAF50;
              color: white;
              padding: 10px;
            }
            td {
              border: 1px solid #999;
              padding: 8px;
            }
            .pass { color: green; font-weight: bold; }
            .fail { color: red; font-weight: bold; }
          </style>

          <table>
            <tr><th colspan='2'><h3>Student Result</h3></th></tr>
            <tr><td><b>Register No.</b></td><td>${v.roll}</td></tr>
            <tr><td><b>Name</b></td><td>${name}</td></tr>
            <tr><td><b>Class</b></td><td>${studentClass}</td></tr>
            <tr><td><b>Your Mark</b></td><td>${yourMark}</td></tr>
            <tr><td><b>Class Performance</b></td><td>${classPerformance}</td></tr>
            <tr><td><b>Total Mark</b></td><td>${totalMark}</td></tr>
             <tr><td><b>Maximum Mark</b></td><td>${max_mark}</td></tr>


            <tr><td><b>Status</b></td>
                <td class='${String(status).toLowerCase()=="passed"?"pass":"fail"}'>
                  ${status}
                </td></tr>
          </table>`;
      }
    }

    // ❌ No match found
    if (!found) {
      return "<p style='color:red;text-align:center;'>No record found for that Register Number and Class.</p>";
    }

  } catch (err) {
    return "<p style='color:red;text-align:center;'>Error: " + err.message + "</p>";
  }
}


