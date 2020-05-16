import fetch from 'node-fetch'

export async function getVMList(serverip,session){
    const url:string = `https://${serverip}/rest/vcenter/vm`
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

export async function getVMInformations(serverip,session,vmid){
    const url:string = `https://${serverip}/rest/vcenter/vm/${vmid}`
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

export async function createNewVM(serverip,session){
    const url:string = `https://${serverip}/rest/vcenter/vm`
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


export async function deleteVM(serverip,session,vmid){
    const url:string = `https://${serverip}/rest/vcenter/vm/${vmid}`
    fetch(url, {
      method: 'DELETE',
    })
      .then((response) => {
        console.log(response);
        return response
      })
      .catch((error: any) => {
        console.error(error);
      }); 
}


export async function updateRAM(serverip:string, session:string ,vmid:string){
    const url:string = `https://${serverip}/rest/vcenter/vm/${vmid}/hardware/memory`
    fetch(url, {
      method: 'PATCH',
    })
      .then((response) => {
        console.log(response);
        return response
      })
      .catch((error: any) => {
        console.error(error);
      }); 
}

export async function stopVM(serverip:string, session:string ,vmid:string){
    const url:string = `https://${serverip}/rest/vcenter/vm/${vmid}/power/stop`
    fetch(url, {
      method: 'PATCH',
    })
      .then((response) => {
        console.log(response);
        return response
      })
      .catch((error: any) => {
        console.error(error);
      });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           h 
}

export async function stopVM(serverip:string, session:string ,vmid:string){
    const url:string = `https://${serverip}/rest/vcenter/vm/${vmid}/power/start`
    fetch(url, {
      method: 'PATCH',
    })
      .then((response) => {
        console.log(response);
        return response
      })
      .catch((error: any) => {
        console.error(error);
      });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           h 
}