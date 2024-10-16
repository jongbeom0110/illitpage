import React from 'react';

const members = [
  { name: "윤아", birth: "2004.01.15", imageUrl: "assets/img/yonah.webp" },
  { name: "민주", birth: "2004.05.11", imageUrl: "assets/img/minju.webp" },
  { name: "모카", birth: "2004.10.08", imageUrl: "assets/img/moka.webp" },
  { name: "원희", birth: "2007.06.26", imageUrl: "assets/img/wonhee.webp" },
  { name: "이로하", birth: "2008.02.04", imageUrl: "assets/img/leeloha.webp" }
];

function Members() {
  return (
    <section id="Member" className="about section py-5">
      <div className="container">
        <h2>Members</h2>
        <div className="row gy-4">
          {members.map((member) => (
            <div key={member.name} className="col-md-4">
              <div className="card">
                <img className="card-img-top" src={member.imageUrl} alt={member.name} />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p>생년월일: {member.birth}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Members;
    