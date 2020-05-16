import fetch from 'node-fetch'


export async function getApplianceHealth(serverip,server){
    const url:string = `https://${serverip}/rest/appliance/health/system`
    fetch(url, {
      method: 'GET',
    })
      .then((response) => {
        console.log(response);
        return response
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  export async function rebootAppliance(serverip,session){
        const url:string = `https://${serverip}/rest/appliance/shutdown/reboot`
        fetch(url, {
          method: 'POST',
        })
          .then((response) => {
            console.log(response);
            return response
          })
          .catch((error: any) => {
            console.error(error);
          });
  }

  export async function shutdownAppliance(serverip,session){
    const url:string = `https://${serverip}/rest/appliance/shutdown/poweroff`
    fetch(url, {
      method: 'POST',
    })
      .then((response) => {
        console.log(response);
        return response
      })
      .catch((error: any) => {
        console.error(error);
      });
}