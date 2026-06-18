const users = [
  { id: "ceo", name: "김대표", role: "admin", dept: "전체" },
  { id: "sales01", name: "이대리", role: "member", dept: "영업팀" },
  { id: "tech01", name: "박과장", role: "member", dept: "기술팀" },
  { id: "purchase01", name: "문미리내", role: "member", dept: "구매팀" },
];

const projects = [
  { id: "p4", name: "P4 그리동 설비 검증", dept: "기술팀" },
  { id: "mga310", name: "MGA310 Zuluf", dept: "영업팀" },
  { id: "s4212247", name: "S4212247 견적", dept: "영업팀" },
  { id: "bearing", name: "Bearing Housing 외주", dept: "구매팀" },
];

const mails = [
  {
    id: 1,
    from: "문미리내",
    subject: "P4 그리동 6월 19일 설비 검증 계획 송부 건",
    date: "2026.06.18 16:01",
    size: "488.1 KB",
    hasAttachment: true,
    starred: false,
    dept: "기술팀",
    projectId: "p4",
    status: "검토중",
    readBy: ["tech01"],
    requiredReaders: ["ceo", "tech01", "purchase01"],
  },
  {
    id: 2,
    from: "Minsu KIM",
    subject: "Zuluf MGA310 Progressive Cavity Pump Tech clarification",
    date: "2026.06.18 10:22",
    size: "5.6 MB",
    hasAttachment: true,
    starred: true,
    dept: "영업팀",
    projectId: "mga310",
    status: "답변필요",
    readBy: ["sales01"],
    requiredReaders: ["ceo", "sales01", "tech01"],
  },
  {
    id: 3,
    from: "sales@customer.com",
    subject: "S4212247 견적 요청드립니다",
    date: "2026.06.17 17:45",
    size: "92.4 KB",
    hasAttachment: false,
    starred: false,
    dept: "영업팀",
    projectId: "s4212247",
    status: "견적필요",
    readBy: [],
    requiredReaders: ["ceo", "sales01"],
  },
  {
    id: 4,
    from: "bearing-vendor",
    subject: "Bearing Housing 가공 단가 회신",
    date: "2026.06.17 13:11",
    size: "1.2 MB",
    hasAttachment: true,
    starred: false,
    dept: "구매팀",
    projectId: "bearing",
    status: "처리완료",
    readBy: ["ceo", "purchase01"],
    requiredReaders: ["ceo", "purchase01"],
  },
  {
    id: 5,
    from: "info@partner.co.kr",
    subject: "6월 납기 일정 확인 요청",
    date: "2026.06.16 09:28",
    size: "34.7 KB",
    hasAttachment: false,
    starred: false,
    dept: "전체",
    projectId: "",
    status: "검토중",
    readBy: ["sales01", "tech01"],
    requiredReaders: ["ceo", "sales01", "tech01", "purchase01"],
  },
];

let currentUser = users[0];

const userSelect = document.getElementById("userSelect");
const userInfo = document.getElementById("userInfo");
const mailCount = document.getElementById("mailCount");
const mailTableBody = document.getElementById("mailTableBody");
const projectList = document.getElementById("projectList");
const searchInput = document.getElementById("searchInput");

function init() {
  renderUserSelect();
  renderProjects();
  renderMails();

  userSelect.addEventListener("change", () => {
    currentUser = users.find((user) => user.id === userSelect.value);
    renderProjects();
    renderMails();
  });

  searchInput.addEventListener("input", renderMails);
}

function renderUserSelect() {
  userSelect.innerHTML = users
    .map((user) => {
      return `<option value="${user.id}">${user.name} · ${user.dept}</option>`;
    })
    .join("");

  userSelect.value = currentUser.id;
}

function renderProjects() {
  const visibleProjects = projects.filter((project) => {
    if (currentUser.role === "admin") return true;
    return project.dept === currentUser.dept;
  });

  projectList.innerHTML = visibleProjects
    .map((project) => `<li>${project.name}</li>`)
    .join("");
}

function renderMails() {
  const keyword = searchInput.value.trim().toLowerCase();

  const visibleMails = mails.filter((mail) => {
    const canSee =
      currentUser.role === "admin" ||
      mail.dept === currentUser.dept ||
      mail.dept === "전체";

    const matched =
      mail.from.toLowerCase().includes(keyword) ||
      mail.subject.toLowerCase().includes(keyword) ||
      getProjectName(mail.projectId).toLowerCase().includes(keyword);

    return canSee && matched;
  });

  userInfo.textContent = `${currentUser.name} · ${currentUser.role === "admin" ? "관리자" : currentUser.dept}`;
  mailCount.textContent = `${visibleMails.length}건`;

  mailTableBody.innerHTML = visibleMails
    .map((mail) => {
      const readState = getReadState(mail);
      const unreadClass = readState.type === "unread" ? "unread" : "";

      return `
        <tr class="${unreadClass}">
          <td><input type="checkbox" /></td>
          <td>${mail.starred ? "★" : "☆"}</td>
          <td>${mail.hasAttachment ? "📎" : ""}</td>
          <td>${mail.from}</td>
          <td class="subject">${mail.subject}</td>
          <td>${getProjectName(mail.projectId)}</td>
          <td><span class="read-chip ${readState.type}">${readState.label}</span></td>
          <td>${renderStatus(mail.status)}</td>
          <td>${mail.date}</td>
          <td>${mail.size}</td>
        </tr>
      `;
    })
    .join("");
}

function getProjectName(projectId) {
  const project = projects.find((item) => item.id === projectId);
  return project ? project.name : "미분류";
}

function getReadState(mail) {
  const meRead = mail.readBy.includes(currentUser.id);
  const requiredAllRead = mail.requiredReaders.every((id) => mail.readBy.includes(id));
  const someoneRead = mail.readBy.length > 0;

  const deptUserIds = users
    .filter((user) => user.dept === currentUser.dept)
    .map((user) => user.id);

  const deptRead = mail.readBy.some((id) => deptUserIds.includes(id));

  if (requiredAllRead) {
    return { type: "all", label: "모두 읽음" };
  }

  if (meRead) {
    return { type: "me", label: "내가 읽음" };
  }

  if (deptRead) {
    return { type: "dept", label: "부서 읽음" };
  }

  if (someoneRead) {
    return { type: "company", label: "회사 읽음" };
  }

  return { type: "unread", label: "새 메일" };
}

function renderStatus(status) {
  const map = {
    견적필요: "wait",
    검토중: "review",
    답변필요: "reply",
    처리완료: "done",
  };

  return `<span class="status-chip ${map[status] || "review"}">${status}</span>`;
}

init();