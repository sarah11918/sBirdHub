export default function Checklist(checklist) {
  return `
    <div class="checklist">
      <div> 
        <span class="gray">${checklist.loc.locName}</span>
      </div>
      <div>
        <div class="gray">
          ${checklist.userDisplayName} saw ${checklist.numSpecies} species(s) at ${checklist.locName}
          <div>${checklist.obsDt} at ${checklist.obsTime}</div>
          </br>
        </div>
      </div>
    </div>
  `;  
}