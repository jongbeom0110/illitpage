import React, { useState } from 'react';

const members = [
  {
    name: "윤아",
    birth: "2004.01.15",
    nationality: "대한민국",
    gender: "여",
    company: "빌리프랩",
    group: "ILLIT",
    debutDate: "2024.03.25",
    mbti: "ENFP",
    imageUrl: "/assets/img/yoona.webp",
  },
  {
    name: "민주",
    birth: "2004.05.11",
    nationality: "대한민국",
    gender: "여",
    company: "빌리프랩",
    group: "ILLIT",
    debutDate: "2024.03.25",
    mbti: "ISTP",
    imageUrl: "/assets/img/minju.webp",
  },
  {
    name: "모카",
    birth: "2004.10.08",
    nationality: "일본",
    gender: "여",
    company: "빌리프랩",
    group: "ILLIT",
    debutDate: "2024.03.25",
    mbti: "ISFP",
    imageUrl: "/assets/img/moka.webp",
  },
  {
    name: "원희",
    birth: "2007.06.26",
    nationality: "대한민국",
    gender: "여",
    company: "빌리프랩",
    group: "ILLIT",
    debutDate: "2024.03.25",
    mbti: "INFP",
    imageUrl: "/assets/img/wonhee.webp",
  },
  {
    name: "이로하",
    birth: "2008.02.04",
    nationality: "일본",
    gender: "여",
    company: "빌리프랩",
    group: "ILLIT",
    debutDate: "2024.03.25",
    mbti: "INFJ",
    imageUrl: "/assets/img/iroha.webp",
  },
];

function MemberModal({ show, member, onClose }) {
  if (!show) return null;

  return (

        <div className="modal fade show" style={{display: 'block'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{member.name}</h5>
                <button type="button" className="close" onClick={onClose}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body text-center">
                <img src={member.imageUrl} className="img-fluid mb-3" alt={member.name}/>
                <p><strong>생년월일:</strong> {member.birth}</p>
                <p><strong>국적:</strong> {member.nationality}</p>
                <p><strong>성별:</strong> {member.gender}</p>
                <p><strong>소속사:</strong> {member.company}</p>
                <p><strong>그룹명:</strong> {member.group}</p>
                <p><strong>데뷔일:</strong> {member.debutDate}</p>
                <p><strong>MBTI:</strong> {member.mbti}</p>
              </div>
            </div>
          </div>
        </div>
  );
}

function Members() {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (members) => {
    setSelectedMember(members);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
      <section id="Member" className="about section">
        <div className="container">
          <div className="row" id="members-container">
            {members.map((members) => (
                <div className="col-md-4 mb-4" key={members.name}>
                  <div className="card" onClick={() => handleMemberClick(members)}>
                    <img
                        className="card-img-top"
                        src={members.imageUrl}
                        alt="멤버 이미지"
                        style={members.name === "모카" ? {height: '352.75px', objectFit: 'cover'} : {}}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{members.name}</h5>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* 모달 컴포넌트 */}
          <MemberModal
              show={!!selectedMember}
              member={selectedMember}
              onClose={handleCloseModal}
          />
        </div>
      </section>
        );
        }

        export default Members;