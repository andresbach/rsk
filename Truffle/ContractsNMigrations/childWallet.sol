pragma solidity ^0.4.4;

contract ChildrenWallet {
  // allowed es un vector dinamico (NO?) de estructura que tiene nombres y direcciones permitidas
  WalletAllowed[] public allowed;
  address parents;

  // la estructura indica el nombre y direccion donde el chico puede comprar
  struct WalletAllowed {
    bytes32 name;
    address account;
  }

  // el padre crea la billetera y asocia su cuenta a parents en el constructor
  function ChildrenWallet() {
    parents = msg.sender;
  }

  // si quiero agregar una nueva direccion en la que puede gastar. (Pero lo puede llamar cualquiera?) Algo que no me copa es que no hace un chequeo si es nueva o no. Deberia recorrer toda la lista primero y de ahi ver si existe. Si no lo hace, ahi debe agregarlo, sino la lista crece indefinidamente pudiendo tener varias veces repetida la misma direccion
    function addAllowed(bytes32 _name, address _account) returns (bool _success) {

    // alojo en memoria un nuevo wallet allower y le associo el nombre y la direccion. Queda en memoria porque es solo una estructura temporal antes de meterla en la dinamica allowed, luego se destruye newAllowed
    WalletAllowed memory newAllowed;
    newAllowed.name = _name;
    newAllowed.account = _account;

    //  allowed es el vect dinamico, entonces al pushear, le creo un nuevo valor y le meto la temporal que acabo de crear. Si lo logra hacer, entonces me devuelve un true. Sino por defecto estimo que devuelve un false. Pero nada me impide que el pibe entre. (que hace realmente el push?)
    allowed.push(newAllowed);
    return true;
  }

  // funcion que me devuelve la lista completa de los lugares permitidos (solo los nombres)
  function getAllowedNames() constant returns (bytes32[]) {
      // chequeo la longitud de la lista dinamica y me creo un array de nombres temporales de longitud length
      uint length = allowed.length;
      bytes32[] memory names = new bytes32[](length);

      // asigno en cada lugar del array temporal los nombres uno a uno
      for (uint i = 0; i < length; i++) {
          names[i] = allowed[i].name;
      }

      // devuelvo la lista completa temporal con los nombres
      return names;
  }

  // idem de la anterior pero ahora el array no es de nombres sino que de addresses. La funcion estimo que solidity le da propiedad de publica automaticamente porque no se declara de antemano. Constant?
  function getAllowedAddresses() constant returns (address[]) {
      uint length = allowed.length;
      address[] memory addresses = new address[](length);

      for (uint i = 0; i < length; i++) {
          addresses[i] = allowed[i].account;
      }

      // una vez que tengo todas, me trae nuevamente todas las addresses con el mismo orden
      return addresses;
  }

  // funcion que se fija si la address que le paso existe en algun lado de la lista
  function buySomething(address _to) constant returns (string) {
      // primero hallo la longitud actual de la lista y luego busco
      uint length = allowed.length;
      for (uint i = 0; i < length; i++) {
          if (_to == allowed[i].account) {
            // si aparece en la lista, me permite la compra
            return "You can buy here";
          }
      }
      // si no la encuentro, sale rechazado
      return "You can not buy here";
  }
}
