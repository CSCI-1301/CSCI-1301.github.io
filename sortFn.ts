import { Options } from "./quartz/components/ExplorerNode"

// This function lets us sort the entries in the explorer (=the menu)
// with a custom order (that is, not alphabetically).
// cf. https://quartz.jzhao.xyz/features/explorer#advanced-customization

export const sortFn: Options["sortFn"] = (a, b) => {
  const nameOrderMap: Record<string, number> = {
    // Folder
    //   Folder
    //     File
    // Note that we can use either the file name or its title.
    "docs": 10000,
    "lectures":20000,
      "Introductions":20100,
        "computers_and_programming": 20110,
        "csharp_fundamentals": 20120,
        "datatypes_and_variables": 20130,
        "operators": 20140,
        "conversions": 20160,
        "inputs_and_outputs": 20170,
      "oop": 20200,
      "flow": 20300,
          "introduction": 20310,
          "booleans": 20320,
          "ifs": 20330,
          "switch": 20340,
          
      "arrays": 20400,
      "misc": 20500,
    "labs": 30000,
    
    /*
    "introduction_to_computers_and_programming": 010,
    "csharp_fundamentals.md": 020,
    "datatypes_and_variables.md": 030,
    "operators.md": 040,
    "inputs_and_outputs.md": 050,
    "more_advanced_object_concepts.md": 060,
    */
  }
  
  let orderA = 0
  let orderB = 0
  
  if (a.file && a.file.slug) {
    orderA = nameOrderMap[a.file.slug] || 0
  } else if (a.name) {
    orderA = nameOrderMap[a.name] || 0
  }
  
  if (b.file && b.file.slug) {
    orderB = nameOrderMap[b.file.slug] || 0
  } else if (b.name) {
    orderB = nameOrderMap[b.name] || 0
  }
  
  return orderA - orderB
}
