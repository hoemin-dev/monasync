const users = [
  {
    id: "ceo",
    name: "김대표",
    role: "admin",
    dept: "전체",
    title: "CEO",
    phone: "031-000-0000",
    mobile: "010-0000-0001",
    email: "ceo@monas.co.kr",
  },
  {
    id: "sales01",
    name: "이대리",
    role: "member",
    dept: "영업팀",
    title: "Sales Manager",
    phone: "031-000-0000",
    mobile: "010-0000-0002",
    email: "sales@monas.co.kr",
  },
  {
    id: "tech01",
    name: "박과장",
    role: "member",
    dept: "기술팀",
    title: "Technical Manager",
    phone: "031-000-0000",
    mobile: "010-0000-0003",
    email: "pump@monas.co.kr",
  },
  {
    id: "purchase01",
    name: "문미리내",
    role: "member",
    dept: "구매팀",
    title: "Purchasing Manager",
    phone: "031-000-0000",
    mobile: "010-0000-0004",
    email: "purchase@monas.co.kr",
  },
];

const sendAddresses = [
  {
    key: "sales",
    label: "sales@",
    address: "sales@monas.co.kr",
    displayName: "MONAS Sales Team",
    teamName: "MONAS Sales Team",
    allowedUsers: ["ceo", "sales01"],
    allowedDepts: ["영업팀"],
  },
  {
    key: "pump",
    label: "pump@",
    address: "pump@monas.co.kr",
    displayName: "MONAS Pump Team",
    teamName: "MONAS Pump Team",
    allowedUsers: ["ceo", "sales01", "tech01"],
    allowedDepts: ["영업팀", "기술팀"],
  },
  {
    key: "export",
    label: "export@",
    address: "export@monas.co.kr",
    displayName: "MONAS Export Team",
    teamName: "MONAS Export Team",
    allowedUsers: ["ceo", "sales01"],
    allowedDepts: ["영업팀"],
  },
];

const baseTabs = [
  { key: "company", label: "전체" },
  { key: "personal", label: "개인" },
];

const projects = [
  { id: "p4", name: "P4 그리동 설비 검증", dept: "기술팀" },
  { id: "mga310", name: "MGA310 Zuluf", dept: "영업팀" },
  { id: "s4212247", name: "S4212247 견적", dept: "영업팀" },
  { id: "bearing", name: "Bearing Housing 외주", dept: "구매팀" },
];

let mails = [
  {
    id: 1,
    direction: "received",
    from: "customer@example.com",
    fromName: "Customer",
    to: "pump@monas.co.kr",
    fromDisplay: "Customer <customer@example.com>",
    sentBy: "",
    authorId: "",
    signatureUserId: "",
    fromAddressKey: "pump",
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
    bodyHtml: `<p>안녕하세요.</p><p>P4 그리동 설비 검증 계획서와 점검 항목을 첨부드립니다.</p><p>검토 후 회신 부탁드립니다.</p>`,
  },
  {
    id: 2,
    direction: "received",
    from: "Minsu KIM",
    fromName: "Minsu KIM",
    to: "sales@monas.co.kr",
    fromDisplay: "Minsu KIM <minsu.kim@example.com>",
    sentBy: "",
    authorId: "",
    signatureUserId: "",
    fromAddressKey: "sales",
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
    bodyHtml: `<p>Dear MONAS Sales Team,</p><p>Please clarify the technical points for the MGA310 pump selection.</p><p>We are waiting for your reply.</p>`,
  },
  {
    id: 3,
    direction: "received",
    from: "sales@customer.com",
    fromName: "Customer Sales",
    to: "sales@monas.co.kr",
    fromDisplay: "Customer Sales <sales@customer.com>",
    sentBy: "",
    authorId: "",
    signatureUserId: "",
    fromAddressKey: "sales",
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
    bodyHtml: `<p>안녕하세요.</p><p>S4212247 건 견적 요청드립니다.</p><p>납기와 단가 확인 부탁드립니다.</p>`,
  },
  {
    id: 4,
    direction: "received",
    from: "overseas@client.com",
    fromName: "Overseas Client",
    to: "export@monas.co.kr",
    fromDisplay: "Overseas Client <overseas@client.com>",
    sentBy: "",
    authorId: "",
    signatureUserId: "",
    fromAddressKey: "export",
    myUsers: ["sales01"],
    subject: "Export inquiry for MONAS pump",
    date: "2026.06.17 13:11",
    size: "1.2 MB",
    hasAttachment: true,
    starred: false,
    dept: "영업팀",
    projectId: "s4212247",
    status: "답변필요",
    readBy: ["ceo"],
    requiredReaders: ["ceo", "sales01"],
    bodyHtml: `<p>Dear MONAS Export Team,</p><p>We would like to receive your quotation for a progressive cavity pump.</p>`,
  },
  createSentMail({
    id: 5,
    fromAddressKey: "sales",
    to: "customer@example.com",
    authorId: "sales01",
    signatureUserId: "sales01",
    subject: "MGA310 견적서 송부드립니다",
    date: "2026.06.18 18:20",
    size: "320 KB",
    hasAttachment: true,
    dept: "영업팀",
    projectId: "mga310",
    bodyText:
      "안녕하세요.\n\n요청하신 MGA310 견적서 송부드립니다.\n첨부파일 확인 부탁드립니다.",
  }),
  createSentMail({
    id: 6,
    fromAddressKey: "pump",
    to: "plant@example.com",
    authorId: "tech01",
    signatureUserId: "tech01",
    subject: "P4 그리동 설비 검증 자료 송부",
    date: "2026.06.18 15:30",
    size: "1.8 MB",
    hasAttachment: true,
    dept: "기술팀",
    projectId: "p4",
    bodyText:
      "안녕하세요.\n\nP4 그리동 설비 검증 자료 송부드립니다.\n검토 후 의견 부탁드립니다.",
  }),
  createSentMail({
    id: 7,
    fromAddressKey: "export",
    to: "buyer@example.com",
    authorId: "ceo",
    signatureUserId: "ceo",
    subject: "Export quotation for progressive cavity pump",
    date: "2026.06.18 11:10",
    size: "740 KB",
    hasAttachment: true,
    dept: "영업팀",
    projectId: "s4212247",
    bodyText:
      "Dear Customer,\n\nPlease find attached our quotation for the progressive cavity pump.\nWe look forward to your feedback.",
  }),
];

let currentUser = users[0];
let currentScope = "company";
let currentFolder = "all";
let currentProjectId = "all";
let currentDept = "all";
let selectedMailId = null;
let currentView = "mail";
let defaultSignatureAddressKey = "sales";

const userSelect = document.getElementById("userSelect");
const myPageButton = document.getElementById("myPageButton");
const mailView = document.getElementById("mailView");
const myPageView = document.getElementById("myPageView");
const mainEl = document.querySelector(".main");
const mailToolbar = document.getElementById("mailToolbar");
const searchWrap = document.getElementById("searchWrap");
const permissionTableBody = document.getElementById("permissionTableBody");
const profileAvatar = document.getElementById("profileAvatar");
const profileName = document.getElementById("profileName");
const profileSub = document.getElementById("profileSub");
const profileList = document.getElementById("profileList");
const userInfo = document.getElementById("userInfo");
const mailTableBody = document.getElementById("mailTableBody");
const projectList = document.getElementById("projectList");
const searchInput = document.getElementById("searchInput");
const pageTitle = document.getElementById("pageTitle");
const mailScopeTabs = document.getElementById("mailScopeTabs");
const detailBody = document.getElementById("detailBody");
const composeButton = document.getElementById("composeButton");
const composeMoreButton = document.getElementById("composeMoreButton");
const composeModal = document.getElementById("composeModal");
const composeCloseButton = document.getElementById("composeCloseButton");
const composeCancelButton = document.getElementById("composeCancelButton");
const composeFromSelect = document.getElementById("composeFromSelect");
const composeSignatureSelect = document.getElementById(
  "composeSignatureSelect",
);
const composeToInput = document.getElementById("composeToInput");
const composeSubjectInput = document.getElementById("composeSubjectInput");
const composeBodyInput = document.getElementById("composeBodyInput");
const composePreview = document.getElementById("composePreview");
const sendDemoButton = document.getElementById("sendDemoButton");
const toolbarReplyButton = document.getElementById("toolbarReplyButton");
const signatureCard = document.getElementById("signatureCard");
const signatureAddressSelect = document.getElementById(
  "signatureAddressSelect",
);

function init() {
  renderUserSelect();
  renderScopeTabs();
  renderProjects();
  renderMails();
  renderMyPage();
  bindEvents();
}

function bindEvents() {
  userSelect.addEventListener("change", () => {
    currentUser = users.find((user) => user.id === userSelect.value);
    currentScope = "company";
    currentProjectId = "all";
    currentDept = "all";
    selectedMailId = null;

    signatureAddressSelect.addEventListener("change", () => {
      defaultSignatureAddressKey = signatureAddressSelect.value;
      renderMyPage();
    });

    setActiveBySelector("#deptList li", "dept", "all");
    renderScopeTabs();
    renderProjects();
    renderMails();
    renderMyPage();
  });

  searchInput.addEventListener("input", renderMails);

  myPageButton.addEventListener("click", () => {
    setView(currentView === "mypage" ? "mail" : "mypage");
  });

  document.querySelectorAll('[data-view="mail"]').forEach((button) => {
    button.addEventListener("click", () => setView("mail"));
  });

  document.querySelectorAll('[data-view="mypage"]').forEach((button) => {
    button.addEventListener("click", () => setView("mypage"));
  });

  document.querySelectorAll('[data-view-button="mail"]').forEach((button) => {
    button.addEventListener("click", () => setView("mail"));
  });

  document.querySelectorAll("#folderList li").forEach((item) => {
    item.addEventListener("click", () => {
      document
        .querySelectorAll("#folderList li")
        .forEach((li) => li.classList.remove("active"));
      item.classList.add("active");
      currentFolder = item.dataset.folder;
      selectedMailId = null;
      renderMails();
    });
  });

  document.querySelectorAll("#deptList li").forEach((item) => {
    item.addEventListener("click", () => {
      document
        .querySelectorAll("#deptList li")
        .forEach((li) => li.classList.remove("active"));
      item.classList.add("active");
      currentDept = item.dataset.dept;
      currentProjectId = "all";
      selectedMailId = null;
      renderProjects();
      renderMails();
    });
  });

  composeButton.addEventListener("click", () => openCompose());
  composeMoreButton.addEventListener("click", () => openCompose());
  toolbarReplyButton.addEventListener("click", () => openReplyCompose());
  composeCloseButton.addEventListener("click", closeCompose);
  composeCancelButton.addEventListener("click", closeCompose);
  composeFromSelect.addEventListener("change", renderComposePreview);
  composeSignatureSelect.addEventListener("change", renderComposePreview);
  composeBodyInput.addEventListener("input", renderComposePreview);

  sendDemoButton.addEventListener("click", sendDemoMail);
}

function setView(view) {
  currentView = view;
  const isMail = view === "mail";

  mailView.classList.toggle("hidden", !isMail);
  myPageView.classList.toggle("hidden", isMail);
  mailToolbar.classList.toggle("hidden", !isMail);
  searchWrap.classList.toggle("hidden", !isMail);
  myPageButton.classList.toggle("active", !isMail);
  mainEl.classList.toggle("mypage-mode", !isMail);

  document.querySelectorAll(".rail-item").forEach((button) => {
    const buttonView = button.dataset.view || "";
    button.classList.toggle("active", buttonView === view);
  });

  if (isMail) {
    renderMails();
    return;
  }

  renderMyPage();
}

function renderMyPage() {
  profileAvatar.textContent = currentUser.name.slice(0, 1);
  profileName.textContent = currentUser.name;
  profileSub.textContent = `${currentUser.role === "admin" ? "관리자" : "일반 사용자"} · ${currentUser.dept}`;

  profileList.innerHTML = `
    <dt>이메일</dt><dd>${currentUser.email}</dd>
    <dt>직책</dt><dd>${currentUser.title}</dd>
    <dt>부서</dt><dd>${currentUser.dept}</dd>
    <dt>전화</dt><dd>${currentUser.phone}</dd>
    <dt>휴대폰</dt><dd>${currentUser.mobile}</dd>
  `;

  const rows = getPermissionRows();
  permissionTableBody.innerHTML = rows
    .map(
      (row) => `
      <tr>
        <td><strong>${row.name}</strong></td>
        <td>${row.type}</td>
        <td>${checkMark(row.canRead)}</td>
        <td>${checkMark(row.canSend)}</td>
        <td>${checkMark(row.inPersonal)}</td>
        <td>${checkMark(row.deptAllowed)}</td>
        <td>${checkMark(row.canUseSignature)}</td>
        <td>${checkMark(row.canManage)}</td>
        <td class="permission-desc">${row.desc}</td>
      </tr>
    `,
    )
    .join("");

  const usableAddresses = sendAddresses.filter(a => canUseSendAddress(a));

if (!usableAddresses.some(a => a.key === defaultSignatureAddressKey)) {
  defaultSignatureAddressKey = usableAddresses[0]?.key || "";
}

signatureAddressSelect.innerHTML = usableAddresses
  .map(a => `<option value="${a.key}">${a.displayName} &lt;${a.address}&gt;</option>`)
  .join("");

signatureAddressSelect.value = defaultSignatureAddressKey;

const defaultAddress = getAddressByKey(defaultSignatureAddressKey);

signatureCard.innerHTML = `
  <div class="signature-card">
    <img src="./assets/img/logo.svg" class="signature-logo" alt="MONAS">

    <div class="signature-info">
      <strong>${currentUser.name}</strong>
      <div>${currentUser.title} / ${currentUser.dept}</div>

      <div class="signature-company">
        MONAS Progressive Cavity Pumps
      </div>

      <div>Tel. ${currentUser.phone}</div>
      <div>Mobile. ${currentUser.mobile}</div>
      <div>Email. ${defaultAddress.address}</div>
      <div class="signature-muted">${defaultAddress.teamName} 기준 서명입니다.</div>
    </div>
  </div>
`;

  if (currentView === "mypage") {
    pageTitle.innerHTML = `My Page <span>${currentUser.name} 권한 현황</span>`;
    userInfo.textContent =
      "현재 사용자가 접근 가능한 메일함, 발신주소, 서명 기준을 한 번에 확인합니다.";
  }
}

function getPermissionRows() {
  const isAdmin = currentUser.role === "admin";
  const baseRows = [
    {
      name: "전체 메일함",
      type: "공용",
      canRead: true,
      canSend: false,
      inPersonal: false,
      deptAllowed: true,
      canUseSignature: false,
      canManage: isAdmin,
      desc: isAdmin
        ? "모든 부서 메일 열람"
        : `${currentUser.dept} 기준 공용 메일 열람`,
    },
    {
      name: "개인 메일함",
      type: "개인",
      canRead: true,
      canSend: true,
      inPersonal: true,
      deptAllowed: true,
      canUseSignature: true,
      canManage: false,
      desc: "내가 담당자로 지정된 수신메일과 내가 작성한 발신메일",
    },
  ];

  const addressRows = sendAddresses.map((address) => {
    const canUse = canUseSendAddress(address);
    return {
      name: address.address,
      type: "대표주소",
      canRead: canUse,
      canSend: canUse,
      inPersonal: canUse,
      deptAllowed: isAdmin || address.allowedDepts.includes(currentUser.dept),
      canUseSignature: canUse,
      canManage: isAdmin,
      desc: `${address.teamName} 권한자: ${address.allowedUsers.map(getUserName).join(", ")}`,
    };
  });

  return [...baseRows, ...addressRows];
}

function checkMark(value) {
  return value
    ? '<span class="check-mark">v</span>'
    : '<span class="dash-mark">-</span>';
}

function renderUserSelect() {
  userSelect.innerHTML = users
    .map(
      (user) =>
        `<option value="${user.id}">${user.name} · ${user.dept}</option>`,
    )
    .join("");
  userSelect.value = currentUser.id;
}

function renderScopeTabs() {
  const addressTabs = sendAddresses
    .filter((item) => canUseSendAddress(item))
    .map((item) => ({ key: item.key, label: item.label }));

  const tabs = [...baseTabs, ...addressTabs];

  mailScopeTabs.innerHTML = tabs
    .map(
      (tab) =>
        `<button class="${tab.key === currentScope ? "active" : ""}" data-scope="${tab.key}">${tab.label}</button>`,
    )
    .join("");

  document.querySelectorAll("#mailScopeTabs button").forEach((button) => {
    button.addEventListener("click", () => {
      currentScope = button.dataset.scope;
      selectedMailId = null;
      renderScopeTabs();
      renderMails();
    });
  });
}

function renderProjects() {
  const visibleProjects = projects.filter((project) => {
    if (currentDept === "all") {
      if (currentUser.role === "admin") return true;
      return project.dept === currentUser.dept;
    }
    return project.dept === currentDept;
  });

  projectList.innerHTML = [
    `<li class="${currentProjectId === "all" ? "active" : ""}" data-project-id="all">전체 프로젝트</li>`,
    ...visibleProjects.map(
      (project) =>
        `<li class="${currentProjectId === project.id ? "active" : ""}" data-project-id="${project.id}">${project.name}</li>`,
    ),
  ].join("");

  document.querySelectorAll("#projectList li").forEach((item) => {
    item.addEventListener("click", () => {
      currentProjectId = item.dataset.projectId;
      selectedMailId = null;
      renderProjects();
      renderMails();
    });
  });
}

function getVisibleMails() {
  const keyword = searchInput.value.trim().toLowerCase();

  return mails.filter((mail) => {
    const canSee =
      currentUser.role === "admin" ||
      mail.dept === currentUser.dept ||
      mail.dept === "전체";
    const selectedAddress = getAddressByKey(currentScope);

    const matched =
      mail.from.toLowerCase().includes(keyword) ||
      mail.to.toLowerCase().includes(keyword) ||
      mail.subject.toLowerCase().includes(keyword) ||
      getProjectName(mail.projectId).toLowerCase().includes(keyword) ||
      getUserName(mail.sentBy).toLowerCase().includes(keyword) ||
      getTeamName(mail.fromAddressKey).toLowerCase().includes(keyword);

    if (!matched) return false;
    if (currentProjectId !== "all" && mail.projectId !== currentProjectId)
      return false;
    if (currentDept !== "all" && mail.dept !== currentDept) return false;

    if (currentScope === "personal") {
      if (currentFolder === "inbox")
        return (
          mail.direction === "received" && mail.myUsers.includes(currentUser.id)
        );
      if (currentFolder === "sent")
        return mail.direction === "sent" && mail.sentBy === currentUser.id;
      if (currentFolder === "all")
        return (
          mail.myUsers.includes(currentUser.id) ||
          mail.sentBy === currentUser.id
        );
      return false;
    }

    if (currentScope === "company") {
      if (!canSee) return false;
      if (currentFolder === "inbox") return mail.direction === "received";
      if (currentFolder === "sent") return mail.direction === "sent";
      if (currentFolder === "all") return true;
      return false;
    }

    if (selectedAddress) {
      if (!canUseSendAddress(selectedAddress)) return false;
      if (!canSee) return false;
      const addressMatched =
        mail.to === selectedAddress.address ||
        mail.from === selectedAddress.address;
      if (!addressMatched) return false;
      if (currentFolder === "inbox") return mail.direction === "received";
      if (currentFolder === "sent") return mail.direction === "sent";
      if (currentFolder === "all") return true;
      return false;
    }

    return false;
  });
}

function renderMails() {
  const visibleMails = getVisibleMails();

  if (!selectedMailId && visibleMails.length > 0)
    selectedMailId = visibleMails[0].id;

  const folderName = getFolderName(currentFolder);
  const scopeName = getScopeName(currentScope);

  pageTitle.innerHTML = `${scopeName} · ${folderName} <span>${visibleMails.length}건</span>`;
  userInfo.textContent = `${currentUser.name} · ${currentUser.role === "admin" ? "관리자" : currentUser.dept}`;

  mailTableBody.innerHTML = visibleMails
    .map((mail) => {
      const readState = getReadState(mail);
      const unreadClass =
        mail.direction === "received" && readState.type === "unread"
          ? "unread"
          : "";
      const selectedClass = mail.id === selectedMailId ? "selected" : "";

      return `
        <tr class="${unreadClass} ${selectedClass}" data-mail-id="${mail.id}">
          <td><input type="checkbox" /></td>
          <td>${mail.starred ? "★" : "☆"}</td>
          <td>${mail.hasAttachment ? "📎" : ""}</td>
          <td>${mail.direction === "sent" ? mail.to : mail.from}</td>
          <td class="subject">${mail.subject}</td>
          <td><span class="project-chip">${getProjectName(mail.projectId)}</span></td>
          <td>${mail.direction === "sent" ? `<span class="from-chip">${getTeamName(mail.fromAddressKey)}</span>` : "-"}</td>
          <td>${mail.direction === "sent" ? `<span class="author-chip">${getUserName(mail.sentBy)}</span>` : "-"}</td>
          <td><span class="read-chip ${readState.type}">${readState.label}</span></td>
          <td>${renderStatus(mail.status)}</td>
          <td>${mail.date}</td>
          <td>${mail.size}</td>
        </tr>
      `;
    })
    .join("");

  document.querySelectorAll("#mailTableBody tr").forEach((row) => {
    row.addEventListener("click", (event) => {
      if (event.target.tagName === "INPUT") return;
      selectedMailId = Number(row.dataset.mailId);
      renderMails();
    });
  });

  renderDetail(visibleMails);
}

function renderDetail(visibleMails) {
  const mail = visibleMails.find((item) => item.id === selectedMailId);

  if (!mail) {
    detailBody.className = "detail-empty";
    detailBody.innerHTML = "메일을 선택하세요.";
    return;
  }

  const readState = getReadState(mail);
  const authorName = mail.direction === "sent" ? getUserName(mail.sentBy) : "-";
  const fromLabel =
    mail.direction === "sent"
      ? getFromDisplay(mail.fromAddressKey)
      : mail.fromDisplay || mail.from;

  detailBody.className = "";
  detailBody.innerHTML = `
    <h2 class="detail-title">${mail.subject}</h2>

    <div class="detail-meta">
      <div><span class="detail-label">From</span><strong>${fromLabel}</strong></div>
      <div><span class="detail-label">To</span><span>${mail.to}</span></div>
      <div><span class="detail-label">내부 작성자</span><span>${authorName}</span></div>
      <div><span class="detail-label">Date</span><span>${mail.date}</span></div>
      <div><span class="detail-label">Size</span><span>${mail.size}</span></div>
    </div>

    <div class="detail-card">
      <h4>PROJECT</h4>
      <span class="project-chip">${getProjectName(mail.projectId)}</span>
    </div>

    <div class="detail-card">
      <h4>WORKFLOW</h4>
      <p>담당 부서: <strong>${mail.dept}</strong></p>
      <p>상태: ${renderStatus(mail.status)}</p>
      <p>읽음: <span class="read-chip ${readState.type}">${readState.label}</span></p>
    </div>

    <div class="detail-card">
      <h4>MESSAGE BODY</h4>
      <div class="mail-body">${mail.bodyHtml || "본문이 없습니다."}</div>
    </div>

    <div class="detail-actions">
      <button class="primary" onclick="openReplyCompose()">답장</button>
      <button>전달</button>
      <button>프로젝트 연결</button>
      <button>담당 변경</button>
    </div>
  `;
}

function openCompose(preset = {}) {
  const usableAddresses = sendAddresses.filter((item) =>
    canUseSendAddress(item),
  );
  composeFromSelect.innerHTML = usableAddresses
    .map(
      (item) =>
        `<option value="${item.key}">${item.displayName} &lt;${item.address}&gt;</option>`,
    )
    .join("");

  const defaultFromKey =
    preset.fromAddressKey ||
    (getAddressByKey(currentScope) ? currentScope : usableAddresses[0]?.key);
  composeFromSelect.value = defaultFromKey;

  composeSignatureSelect.innerHTML = [
    `<option value="${currentUser.id}">${currentUser.name} 개인 서명</option>`,
    `<option value="team">팀 서명</option>`,
    `<option value="none">서명 없음</option>`,
  ].join("");

  composeSignatureSelect.value = preset.signatureUserId || currentUser.id;
  composeToInput.value = preset.to || "";
  composeSubjectInput.value = preset.subject || "";
  composeBodyInput.value = preset.bodyText || "안녕하세요.\n\n";

  composeModal.classList.remove("hidden");
  renderComposePreview();
}

function openReplyCompose() {
  const visibleMails = getVisibleMails();
  const selected = visibleMails.find((item) => item.id === selectedMailId);

  if (!selected) {
    openCompose();
    return;
  }

  openCompose({
    fromAddressKey: selected.fromAddressKey || getDefaultAddressKeyForUser(),
    to: selected.direction === "received" ? selected.from : selected.to,
    subject: selected.subject.startsWith("Re:")
      ? selected.subject
      : `Re: ${selected.subject}`,
    bodyText:
      "안녕하세요.\n\n문의주신 내용 확인했습니다.\n아래와 같이 회신드립니다.\n",
    signatureUserId: currentUser.id,
  });
}

function closeCompose() {
  composeModal.classList.add("hidden");
}

function renderComposePreview() {
  const bodyText = composeBodyInput.value;
  const signatureHtml = getSelectedSignatureHtml();
  composePreview.innerHTML = `${textToHtml(bodyText)}${signatureHtml}`;
}

function getSelectedSignatureHtml() {
  const signatureValue = composeSignatureSelect.value;
  const fromAddress = getAddressByKey(composeFromSelect.value);

  if (signatureValue === "none") return "";

  if (signatureValue === "team") {
    return renderTeamSignature(fromAddress);
  }

  const signatureUser =
    users.find((user) => user.id === signatureValue) || currentUser;
  return renderUserSignature(signatureUser, fromAddress);
}

function sendDemoMail() {
  const fromAddress = getAddressByKey(composeFromSelect.value);
  const signatureValue = composeSignatureSelect.value;
  const signatureUserId =
    signatureValue === "team" || signatureValue === "none"
      ? ""
      : signatureValue;
  const nextId = Math.max(...mails.map((mail) => mail.id)) + 1;
  const now = new Date();
  const dateText = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}.${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  mails.unshift({
    id: nextId,
    direction: "sent",
    from: fromAddress.address,
    fromName: fromAddress.displayName,
    fromDisplay: getFromDisplay(fromAddress.key),
    to: composeToInput.value.trim() || "customer@example.com",
    sentBy: currentUser.id,
    authorId: currentUser.id,
    signatureUserId,
    fromAddressKey: fromAddress.key,
    myUsers: [currentUser.id],
    subject: composeSubjectInput.value.trim() || "제목 없음",
    date: dateText,
    size: "12 KB",
    hasAttachment: false,
    starred: false,
    dept: currentUser.dept === "전체" ? "영업팀" : currentUser.dept,
    projectId: currentProjectId === "all" ? "s4212247" : currentProjectId,
    status: "처리완료",
    readBy: [currentUser.id],
    requiredReaders: [currentUser.id],
    bodyHtml: composePreview.innerHTML,
  });

  currentScope = fromAddress.key;
  currentFolder = "sent";
  selectedMailId = nextId;
  setActiveBySelector("#folderList li", "folder", "sent");
  closeCompose();
  renderScopeTabs();
  renderMails();
  renderMyPage();
}

function createSentMail({
  id,
  fromAddressKey,
  to,
  authorId,
  signatureUserId,
  subject,
  date,
  size,
  hasAttachment,
  dept,
  projectId,
  bodyText,
}) {
  const address = getAddressByKey(fromAddressKey);
  const signatureUser = users.find((user) => user.id === signatureUserId);

  return {
    id,
    direction: "sent",
    from: address.address,
    fromName: address.displayName,
    fromDisplay: getFromDisplay(fromAddressKey),
    to,
    sentBy: authorId,
    authorId,
    signatureUserId,
    fromAddressKey,
    myUsers: [authorId],
    subject,
    date,
    size,
    hasAttachment,
    starred: false,
    dept,
    projectId,
    status: "처리완료",
    readBy: [authorId],
    requiredReaders: [authorId],
    bodyHtml: `${textToHtml(bodyText)}${renderUserSignature(signatureUser, address)}`,
  };
}

function renderUserSignature(user, fromAddress) {
  return `
    <div class="mail-signature">
      <strong>${user.name}</strong><br>
      <span>${user.title} / ${user.dept}</span><br>
      <span class="company">MONAS</span><br>
      <span>Tel. ${user.phone}</span><br>
      <span>Mobile. ${user.mobile}</span><br>
      <span>Email. ${fromAddress.address}</span><br>
      <span class="muted">${fromAddress.teamName}으로 발송된 메일입니다.</span>
    </div>
  `;
}

function renderTeamSignature(fromAddress) {
  return `
    <div class="mail-signature">
      <strong>${fromAddress.teamName}</strong><br>
      <span class="company">MONAS</span><br>
      <span>Email. ${fromAddress.address}</span><br>
      <span class="muted">This message was sent by ${fromAddress.teamName}.</span>
    </div>
  `;
}

function textToHtml(text) {
  const escaped = escapeHtml(text.trim());
  if (!escaped) return "";
  return escaped
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${paragraph.replace(/\n/g, "<br>")}</p>`)
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function canUseSendAddress(addressItem) {
  if (currentUser.role === "admin") return true;
  return (
    addressItem.allowedUsers.includes(currentUser.id) ||
    addressItem.allowedDepts.includes(currentUser.dept)
  );
}

function getAddressByKey(key) {
  return sendAddresses.find((item) => item.key === key);
}

function getDefaultAddressKeyForUser() {
  return sendAddresses.find((item) => canUseSendAddress(item))?.key || "sales";
}

function getScopeName(scope) {
  if (scope === "company") return "전체";
  if (scope === "personal") return "개인";
  const address = getAddressByKey(scope);
  return address ? address.label : "전체";
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

function getTeamName(addressKey) {
  const address = getAddressByKey(addressKey);
  return address ? address.teamName : "-";
}

function getFromDisplay(addressKey) {
  const address = getAddressByKey(addressKey);
  return address ? `${address.displayName} <${address.address}>` : "-";
}

function getReadState(mail) {
  if (mail.direction === "sent") return { type: "me", label: "발송됨" };

  const meRead = mail.readBy.includes(currentUser.id);
  const requiredAllRead = mail.requiredReaders.every((id) =>
    mail.readBy.includes(id),
  );
  const someoneRead = mail.readBy.length > 0;

  const deptUserIds = users
    .filter((user) => user.dept === currentUser.dept)
    .map((user) => user.id);
  const deptRead = mail.readBy.some((id) => deptUserIds.includes(id));

  if (requiredAllRead) return { type: "all", label: "모두 읽음" };
  if (meRead) return { type: "me", label: "내가 읽음" };
  if (deptRead) return { type: "dept", label: "부서 읽음" };
  if (someoneRead) return { type: "company", label: "회사 읽음" };
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

function setActiveBySelector(selector, datasetKey, value) {
  document.querySelectorAll(selector).forEach((item) => {
    item.classList.toggle("active", item.dataset[datasetKey] === value);
  });
}

init();
