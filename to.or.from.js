function TtB64(txt){return btoa(new TextEncoder().encode(txt).join(' '))
};function TfB64(txt){return new TextDecoder().decode(new Uint8Array(atob(txt).split(' ').map(x=>x=parseInt(x))))
};export{TtB64,TfB64}
