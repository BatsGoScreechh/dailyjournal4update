 

// const journalEntryArray = [];
// for(let i=0;i < journalEntries.length;i++){
// journalEntryArray.push(journalEntries[i])

// }

// const journalConcept = (journalConcept) => {
//     return `<h2>${journalConcept}</h2>`
// }

// const journalDate = (journalDate) => {
//     return `<p>${journalDate}<p>`
// }

// const journalEntry = (journalEntry) => {
//     return `<p>${journalEntry}</p>`
// }

// const journalMood = (journalMood) => {
//     return `<p>${journalMood}</p>`
// }

// const journalComponent = (concept, date, entry, mood) => {
//     const conceptFinished = journalConcept(concept)
//     const dateFinished = journalDate(date)
//     const entryFinished = journalEntry(entry)
//     const moodFinished = journalMood(mood)
//     return `${conceptFinished} ${dateFinished} ${entryFinished} ${moodFinished}`
// }

// let journalHTMLString = ""
// for(let i=0; i < journalEntryArray.length; i++){
//     journalHTMLString = journalHTMLString + journalComponent(journalEntryArray[i].concept, journalEntryArray[i].date, journalEntryArray[i].entry, journalEntryArray[i].mood)
// }
// const finalJournalComponent = () =>{
//     return journalHTMLString
// }

// document.querySelector(".entryLog").innerHTML = finalJournalComponent();

fetch("http://localhost:3000/entries") // Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(parsedEntries => {
        parsedEntries.forEach(entries => {
            document.querySelector(".entryLog").innerHTML += `<div><h2>${entries.concept}</h2><p>${entries.date}</p><p>${entries.entry}</p><p>${entries.mood}</p></div>`
        })
        // parsedEntries.concept = entries.concept
        // document.querySelector(".entryLog").innerHTML += `<div><h2>${parsedEntries.concept}</h2><p>${parsedEntries.date}</p><p>${parsedEntries.date}</p><p>${parsedEntries.mood}</p></div>`
        // What should happen when we finally have the array?
    })