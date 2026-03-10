import { annotate } from "https://unpkg.com/rough-notation?module";

const nameElement = document.querySelector("#my-name");
const letsconnectElement = document.querySelector("#lets-connect");

if (nameElement) {
  const n1 = annotate(nameElement, { 
    type: 'underline', 
    color: 'rgb(0, 195, 175)', 
    strokeWidth: 2 
  });
  n1.show();
}

if (letsconnectElement) {
  const n2 = annotate(letsconnectElement, { 
    type: 'highlight', 
    color: 'rgb(0, 195, 175)', 
    strokeWidth: 2 
  });
  n2.show();
}