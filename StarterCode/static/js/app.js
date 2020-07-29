// 1. Use the D3 library to read in `samples.json`.
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("samples.json").then((importedSamples) => {
    console.log(importedSamples);

    var data = Object.values(importedSamples.samples);
    console.log(data);
    // 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    var samples = data.filter(sample => sample.id.toString())[0];
    console.log(samples);

    // Slice the top 10 OTUs for plotting.Slice only works for arrays!
    var sampleValues = Object.values(samples.sample_values).slice(0, 10).reverse();
    var otuLabels = Object.values(samples.otu_labels).slice(0, 10);
    var otuTop = Object.values(samples.otu_ids).slice(0, 10).reverse();
    var otuId = otuTop.map(id => "OTU"+id);

    var trace = {
        x: sampleValues,

        y: otuId,

        text: otuLabels,

        marker: {

          color: 'rgb(142,124,195)'},

        type:"bar",

        orientation: "h",
    }

    var chartData = [trace];
    
  
    

    // data = data.slice(0, 10);
    // // Reverse the array due to Plotly's defaults
    // data = data.reverse();
  
    // // Trace1 for the Greek Data
    // var trace1 = {
    //   x: data.map(row => row.sample_values),
    //   y: data.map(row => row.otu_ids),
    //   name: "Greek",
    //   type: "bar",
    //   orientation: "h"
    // };
  
    // // data
    // var chartData = [trace1];
  
    // // Apply the group bar mode to the layout
    // var layout = {
    //   title: "Greek gods search results",
    //   margin: {
    //     l: 100,
    //     r: 100,
    //     t: 100,
    //     b: 100
    //   }
    // };
  
    // // Render the plot to the div tag with id "plot"
     Plotly.newPlot("bar", chartData);
  });
  







// // 1. Use the D3 library to read in `samples.json`.


// d3.json("samples.json").then(function(data) {

//     console.log(data);

//     // 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//     var names = Object.values(data.names);
//     console.log(names);
//     var samples = Object.values(data.samples);
//     var filteredSamples = samples.filter(samples => samples.id = names[0])
//     console.log(filteredSamples);
//     var metadata = Object.values(data.metadata);
//     console.log(metadata);

//     function init() {
//         var data = [{

//         }]
//     }

    

// });


 

// d3.selectAll("#selDataset").on("change", getData);

// function getData() {

//     var dropdownMenu = d3.select("#selDataset");

//     d3.json("samples.json").then(function(data) {

//         console.log(data);

//         data.names.forEach(function(name) {

//             dropdown.append("option").text(name).property("value");

//         });


//         getData(data.names[0]);

//         //getInfo(data.names[0]);

//     });

// }





// // 3. Create a bubble chart that displays each sample.

// // 4. Display the sample metadata, i.e., an individual's demographic information.

// // 5. Display each key-value pair from the metadata JSON object somewhere on the page.

// // 6. Update all of the plots any time that a new sample is selected.

// // Additionally, you are welcome to create any layout that you would like for your dashboard. 
