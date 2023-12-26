
function Gmembers(){
    const Members = [
        "Nathan Israel",
        "Natinael Wondimagegnehu ",
        "Olbia Letta ",
        "Temesgen Getye",
        "Osman Hassan",
        "Rahel Belay",
        "Rediet Belay",
        "Robel Teshome",
        "Ruth Tadesse",
        "Ruth Zenabu",
        "Salahuddin Hafiz",
        "Salem Habte",
        "samual keleb",
        "Seid Yesuf ",
        "solomon sheleme",
        "surafel nigusie",
      ];
      const Membersmap = Members.map(function (name, index) {
        return (
          <p>
            No. {index + 1} {name}
          </p>
        );
      });
      return (
        <>
          <div className="mem">{Membersmap}</div>
        </>
      );

}
export default Gmembers;