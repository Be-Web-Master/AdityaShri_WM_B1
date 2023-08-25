const idHead = document.getElementById("idHead");
const idBody = document.getElementById("idBody");
const btncol = document.getElementById("addcol");
const btnrow = document.getElementById("addrow");

// create input fun
const arr = {
  header: [
    {
      elementType: "th",
      columnName: "A",
      order: 1,
      sort: "undefined",
    },
    {
      elementType: "th",
      columnName: "B",
      order: 1,
      sort: "undefined",
    },
    {
      elementType: "th",
      columnName: "C",
      order: 1,
      sort: "undefined",
    },
  ],

  body: [
    {
      elementTypetr: "tr",
      rowOrder: 1,
      RowElement: [
        {
          elementTypetd: "td",
          columnName: "A1",
          rowOrder: 1,
          value: "",
        },
        {
          elementTypetd: "td",
          columnName: "b1",
          rowOrder: 2,
          value: "",
        },
        {
          elementTypetd: "td",
          columnName: "c1",
          rowOrder: 3,
          value: "",
        },
      ],
    },
    {
      elementTypetr: "tr",
      rowOrder: 2,
      RowElement: [
        {
          elementTypetd: "td",
          columnName: "A2",
          rowOrder: 1,
          value: "",
        },
        {
          elementTypetd: "td",
          columnName: "b2",
          rowOrder: 2,
          value: "",
        },
        {
          elementTypetd: "td",
          columnName: "c2",
          rowOrder: 3,
          value: "",
        },
      ],
    },
    {
      elementTypetr: "tr",
      rowOrder: 3,
      RowElement: [
        {
          elementTypetd: "td",
          columnName: "a3",
          rowOrder: 1,
          value: "",
        },
        {
          elementTypetd: "td",
          columnName: "b3",
          rowOrder: 2,
          value: "",
        },
        {
          elementTypetd: "td",
          columnName: "c3",
          rowOrder: 3,
          value: "",
        },
      ],
    },
  ],
};

function dataStore(){
    const header = arr.header;
    const body = arr.body;
    idHead.innerHTML = ""
    idBody.innerHTML = ""
    for (let i = 0; i < header.length; i++) {
        const createElement = document.createElement(header[i].elementType);
        createElement.innerText = header[i].columnName;
        idHead.append(createElement)
    }


    body.forEach((tablerow) => {
        const {elementTypetr ,RowElement} = tablerow;
        const tr = document.createElement(elementTypetr)
        RowElement.forEach((cellElement) =>
        {
            const tdElement = document.createElement(cellElement.elementTypetd);
            tdElement.innerText= cellElement.columnName;
            tr.append(tdElement)
        })
        idBody.append(tr);
    })
}
dataStore()


const addNewColumn = (columnData) =>{
    tableData.header.push(columnData)
    tableData.body.forEach((tableRow,idx) =>{
        const{columnElems = [] } = tableRow

    })
}














// or ye searching ke liye he 
const createInput = (type, placeName) => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", placeName);
  console.log(input);
  return input;
};


// column ke liye ye wala krna he 
function addColumnBtn() {
  const newCol = document.createElement("th");
  newCol.append(createInput("text", "text here "));
  // console.log(newCol)
  idHead.append(newCol);
  console.log(idBody.childElementCount);
  if (idBody.childElementCount) {
    for (const elem of idBody.children) {
      const td = document.createElement("td");
      elem.appendChild(td);
      td.append(createInput("search", "Searching "));
    }
  }
}


// Row ke liye ye wala krna he
function addRowBtn() {
  const newRow = document.createElement("tr");

  for (let i = 0; i < idHead.childElementCount; i++) {
    // console.log('loop running')
    let rowElement = document.createElement("td");
    createInput("text", "hhhhhh");
    rowElement.append(createInput("text", "text here "));
    // console.log(rowElement)
    newRow.append(rowElement);
  }
  idBody.append(newRow);
}


