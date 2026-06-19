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
    direction: "received",
    from: "문미리내",
    to: "tech@monas.co.kr",
    sentBy: "",
    myUsers: ["tech01"],
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
    direction: "received",
    from: "Minsu KIM",
    to: "sales@monas.co.kr",
    sentBy: "",
    myUsers: ["sales01"],
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
    direction: "received",
    from: "sales@customer.com",
    to: "sales@monas.co.kr",
    sentBy: "",
    myUsers: ["sales01"],
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
    direction: "received",
    from: "bearing-vendor",
    to: "purchase@monas.co.kr",
    sentBy: "",
    myUsers: ["purchase01"],
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
    direction: "received",
    from: "info@partner.co.kr",
    to: "info@monas.co.kr",
    sentBy: "",
    myUsers: ["sales01", "tech01"],
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
  {
    id: 6,
    direction: "sent",
    from: "sales@monas.co.kr",
    to: "customer@example.com",
    sentBy: "sales01",
    myUsers: ["sales01"],
    subject: "MGA310 견적서 송부드립니다",
    date: "2026.06.18 18:20",
    size: "320 KB",
    hasAttachment: true,
    starred: false,
    dept: "영업팀",
    projectId: "mga310",
    status: "처리완료",
    readBy: ["sales01"],
    requiredReaders: ["sales01"],
  },
  {
    id: 7,
    direction: "sent",
    from: "tech@monas.co.kr",
    to: "plant@example.com",
    sentBy: "tech01",
    myUsers: ["tech01"],
    subject: "P4 그리동 설비 검증 자료 송부",
    date: "2026.06.18 15:30",
    size: "1.8 MB",
    hasAttachment: true,
    starred: false,
    dept: "기술팀",
    projectId: "p4",
    status: "처리완료",
    readBy: ["tech01"],
    requiredReaders: ["tech01"],
  },
];

let currentUser = users[0];
let currentScope = "company";
let currentFolder = "all";

const userSelect = document.getElementById("userSelect");
const userInfo = document.getElementById("userInfo");
const mailCount = document.getElementById("mailCount");
const mailTableBody = document.getElementById("mailTableBody");
const projectList = document.getElementById("projectList");
const searchInput = document.getElementById("searchInput");
const pageTitle = document.getElementById("pageTitle");

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

  document.querySelectorAll(".scope-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".scope-tabs button").forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
      currentScope = button.dataset.scope;
      renderProjects();
      renderMails();
    });
  });

  document.querySelectorAll("#folderList li").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#folderList li").forEach((li) => {
        li.classList.remove("active");
      });

      item.classList.add("active");
      currentFolder = item.dataset.folder;
      renderMails();
    });
  });
}

function renderUserSelect() {
  userSelect.innerHTML = users
    .map((user) => `<option value="${user.id}">${user.name} · ${user.dept}</option>`)
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
      mail.to.toLowerCase().includes(keyword) ||
      mail.subject.toLowerCase().includes(keyword) ||
      getProjectName(mail.projectId).toLowerCase().includes(keyword) ||
      getUserName(mail.sentBy).toLowerCase().includes(keyword);

    if (!matched) return false;

    if (currentScope === "personal") {
      if (currentFolder === "inbox") {
        return mail.direction === "received" && mail.myUsers.includes(currentUser.id);
      }

      if (currentFolder === "sent") {
        return mail.direction === "sent" && mail.sentBy === currentUser.id;
      }

      if (currentFolder === "all") {
        return mail.myUsers.includes(currentUser.id) || mail.sentBy === currentUser.id;
      }

      return false;
    }

    if (currentScope === "company") {
      if (!canSee) return false;

      if (currentFolder === "inbox") return mail.direction === "received";
      if (currentFolder === "sent") return mail.direction === "sent";
      if (currentFolder === "all") return true;

      return false;
    }

    return false;
  });

  const folderName = getFolderName(currentFolder);
  const scopeName = currentScope === "company" ? "전체메일함" : "개인메일함";

  pageTitle.innerHTML = `${scopeName} · ${folderName} <span id="mailCount">${visibleMails.length}건</span>`;
  userInfo.textContent = `${currentUser.name} · ${currentUser.role === "admin" ? "관리자" : currentUser.dept}`;

  mailTableBody.innerHTML = visibleMails
    .map((mail) => {
      const readState = getReadState(mail);
      const unreadClass =
        mail.direction === "received" && readState.type === "unread" ? "unread" : "";

      return `
        <tr class="${unreadClass}">
          <td><input type="checkbox" /></td>
          <td>${mail.starred ? "★" : "☆"}</td>
          <td>${mail.hasAttachment ? "📎" : ""}</td>
          <td>${mail.direction === "sent" ? mail.to : mail.from}</td>
          <td class="subject">${mail.subject}</td>
          <td>${getProjectName(mail.projectId)}</td>
          <td class="sender-cell">${mail.direction === "sent" ? getUserName(mail.sentBy) : "-"}</td>
          <td><span class="read-chip ${readState.type}">${readState.label}</span></td>
          <td>${renderStatus(mail.status)}</td>
          <td>${mail.date}</td>
          <td>${mail.size}</td>
        </tr>
      `;
    })
    .join("");
}

function getFolderName(folder) {
  const map = {
    all: "전체 메일함",
    inbox: "받은 메일함",
    self: "내게 쓴 메일함",
    sent: "보낸 메일함",
    archive: "메일 보관함",
    spam: "스팸 메일함",
    trash: "휴지통",
  };

  return map[folder] || "전체 메일함";
}

function getProjectName(projectId) {
  const project = projects.find((item) => item.id === projectId);
  return project ? project.name : "미분류";
}

function getUserName(userId) {
  const user = users.find((item) => item.id === userId);
  return user ? user.name : "-";
}

function getReadState(mail) {
  if (mail.direction === "sent") {
    return { type: "me", label: "발송됨" };
  }

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