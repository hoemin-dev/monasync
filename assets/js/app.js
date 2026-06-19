const users = [
  {
    id: "ceo",
    name: "김대표",
    role: "admin",
    dept: "전체",
    title: "CEO",
    phone: "031-000-0000",
    mobile: "010-0000-0000",
  },
  {
    id: "sales01",
    name: "이대리",
    role: "member",
    dept: "영업팀",
    title: "Sales Manager",
    phone: "031-000-1001",
    mobile: "010-1111-2222",
  },
  {
    id: "tech01",
    name: "박과장",
    role: "member",
    dept: "기술팀",
    title: "Technical Manager",
    phone: "031-000-2001",
    mobile: "010-2222-3333",
  },
  {
    id: "purchase01",
    name: "문미리내",
    role: "member",
    dept: "구매팀",
    title: "Purchasing Manager",
    phone: "031-000-3001",
    mobile: "010-3333-4444",
  },
];

const sendAddresses = [
  {
    key: "sales",
    label: "sales@",
    address: "sales@monas.co.kr",
    displayName: "MONAS Sales Team",
    replyTo: "sales@monas.co.kr",
    defaultDept: "영업팀",
    allowedUsers: ["ceo", "sales01"],
    allowedDepts: ["영업팀"],
  },
  {
    key: "pump",
    label: "pump@",
    address: "pump@monas.co.kr",
    displayName: "MONAS Pump Team",
    replyTo: "pump@monas.co.kr",
    defaultDept: "기술팀",
    allowedUsers: ["ceo", "sales01", "tech01"],
    allowedDepts: ["영업팀", "기술팀"],
  },
  {
    key: "export",
    label: "export@",
    address: "export@monas.co.kr",
    displayName: "MONAS Export Team",
    replyTo: "export@monas.co.kr",
    defaultDept: "영업팀",
    allowedUsers: ["ceo", "sales01"],
    allowedDepts: ["영업팀"],
  },
];

const signatureTemplates = [
  {
    id: "user-default",
    label: "로그인 사용자 명함",
    type: "user",
  },
  {
    id: "team-default",
    label: "팀 대표 서명",
    type: "team",
  },
  {
    id: "none",
    label: "서명 없음",
    type: "none",
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

const mails = [
  {
    id: 1,
    direction: "received",
    from: "customer@example.com",
    fromIdentity: "Customer",
    to: "pump@monas.co.kr",
    toIdentity: "MONAS Pump Team",
    replyTo: "pump@monas.co.kr",
    sentBy: "",
    signedBy: "",
    signatureType: "",
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
    fromIdentity: "Minsu KIM",
    to: "sales@monas.co.kr",
    toIdentity: "MONAS Sales Team",
    replyTo: "sales@monas.co.kr",
    sentBy: "",
    signedBy: "",
    signatureType: "",
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
    fromIdentity: "Customer Sales",
    to: "sales@monas.co.kr",
    toIdentity: "MONAS Sales Team",
    replyTo: "sales@monas.co.kr",
    sentBy: "",
    signedBy: "",
    signatureType: "",
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
    from: "overseas@client.com",
    fromIdentity: "Overseas Client",
    to: "export@monas.co.kr",
    toIdentity: "MONAS Export Team",
    replyTo: "export@monas.co.kr",
    sentBy: "",
    signedBy: "",
    signatureType: "",
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
  },
  {
    id: 5,
    direction: "sent",
    from: "sales@monas.co.kr",
    fromIdentity: "MONAS Sales Team",
    to: "customer@example.com",
    toIdentity: "Customer",
    replyTo: "sales@monas.co.kr",
    sentBy: "sales01",
    signedBy: "sales01",
    signatureType: "user-default",
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
    id: 6,
    direction: "sent",
    from: "pump@monas.co.kr",
    fromIdentity: "MONAS Pump Team",
    to: "plant@example.com",
    toIdentity: "Plant Customer",
    replyTo: "pump@monas.co.kr",
    sentBy: "tech01",
    signedBy: "tech01",
    signatureType: "user-default",
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
  {
    id: 7,
    direction: "sent",
    from: "export@monas.co.kr",
    fromIdentity: "MONAS Export Team",
    to: "buyer@example.com",
    toIdentity: "Buyer",
    replyTo: "export@monas.co.kr",
    sentBy: "ceo",
    signedBy: "ceo",
    signatureType: "user-default",
    myUsers: ["ceo"],
    subject: "Export quotation for progressive cavity pump",
    date: "2026.06.18 11:10",
    size: "740 KB",
    hasAttachment: true,
    starred: false,
    dept: "영업팀",
    projectId: "s4212247",
    status: "처리완료",
    readBy: ["ceo"],
    requiredReaders: ["ceo"],
  },
];

let currentUser = users[0];
let currentScope = "company";
let currentFolder = "all";
let currentProjectId = "all";
let currentDept = "all";
let selectedMailId = null;

const userSelect = document.getElementById("userSelect");
const userInfo = document.getElementById("userInfo");
const mailTableBody = document.getElementById("mailTableBody");
const projectList = document.getElementById("projectList");
const searchInput = document.getElementById("searchInput");
const pageTitle = document.getElementById("pageTitle");
const mailScopeTabs = document.getElementById("mailScopeTabs");
const detailBody = document.getElementById("detailBody");

const composeButton = document.getElementById("composeButton");
const replyButton = document.getElementById("replyButton");
const composeModal = document.getElementById("composeModal");
const composeCloseButton = document.getElementById("composeCloseButton");
const composeCancelButton = document.getElementById("composeCancelButton");
const composeSendButton = document.getElementById("composeSendButton");
const composeTitle = document.getElementById("composeTitle");
const composeFromSelect = document.getElementById("composeFromSelect");
const composeAuthorInput = document.getElementById("composeAuthorInput");
const composeToInput = document.getElementById("composeToInput");
const composeSubjectInput = document.getElementById("composeSubjectInput");
const composeSignatureSelect = document.getElementById("composeSignatureSelect");
const composeBodyInput = document.getElementById("composeBodyInput");
const signaturePreview = document.getElementById("signaturePreview");

function init() {
  renderUserSelect();
  renderScopeTabs();
  renderProjects();
  renderMails();

  userSelect.addEventListener("change", () => {
    currentUser = users.find((user) => user.id === userSelect.value);
    currentScope = "company";
    currentProjectId = "all";
    currentDept = "all";
    selectedMailId = null;

    setActiveBySelector("#deptList li", "dept", "all");
    renderScopeTabs();
    renderProjects();
    renderMails();
  });

  searchInput.addEventListener("input", renderMails);

  document.querySelectorAll("#folderList li").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#folderList li").forEach((li) => li.classList.remove("active"));
      item.classList.add("active");
      currentFolder = item.dataset.folder;
      selectedMailId = null;
      renderMails();
    });
  });

  document.querySelectorAll("#deptList li").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#deptList li").forEach((li) => li.classList.remove("active"));
      item.classList.add("active");
      currentDept = item.dataset.dept;
      currentProjectId = "all";
      selectedMailId = null;
      renderProjects();
      renderMails();
    });
  });

  composeButton.addEventListener("click", () => openCompose());
  replyButton.addEventListener("click", () => openReplyToSelectedMail());
  composeCloseButton.addEventListener("click", closeCompose);
  composeCancelButton.addEventListener("click", closeCompose);
  composeFromSelect.addEventListener("change", updateComposeSignaturePreview);
  composeSignatureSelect.addEventListener("change", updateComposeSignaturePreview);
  composeSendButton.addEventListener("click", sendDemoMail);
}

function renderUserSelect() {
  userSelect.innerHTML = users
    .map((user) => `<option value="${user.id}">${user.name} · ${user.dept}</option>`)
    .join("");

  userSelect.value = currentUser.id;
}

function renderScopeTabs() {
  const addressTabs = sendAddresses
    .filter((item) => canUseSendAddress(item))
    .map((item) => ({
      key: item.key,
      label: item.label,
    }));

  const tabs = [...baseTabs, ...addressTabs];

  mailScopeTabs.innerHTML = tabs
    .map((tab) => {
      const activeClass = tab.key === currentScope ? "active" : "";
      return `<button class="${activeClass}" data-scope="${tab.key}">${tab.label}</button>`;
    })
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

function canUseSendAddress(addressItem) {
  if (currentUser.role === "admin") return true;

  return (
    addressItem.allowedUsers.includes(currentUser.id) ||
    addressItem.allowedDepts.includes(currentUser.dept)
  );
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
    ...visibleProjects.map((project) => {
      const activeClass = currentProjectId === project.id ? "active" : "";
      return `<li class="${activeClass}" data-project-id="${project.id}">${project.name}</li>`;
    }),
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

    const matched =
      mail.from.toLowerCase().includes(keyword) ||
      mail.to.toLowerCase().includes(keyword) ||
      mail.subject.toLowerCase().includes(keyword) ||
      mail.fromIdentity.toLowerCase().includes(keyword) ||
      mail.toIdentity.toLowerCase().includes(keyword) ||
      getProjectName(mail.projectId).toLowerCase().includes(keyword) ||
      getUserName(mail.sentBy).toLowerCase().includes(keyword) ||
      getUserName(mail.signedBy).toLowerCase().includes(keyword);

    if (!matched) return false;

    if (currentProjectId !== "all" && mail.projectId !== currentProjectId) return false;
    if (currentDept !== "all" && mail.dept !== currentDept) return false;

    if (currentScope === "personal") {
      if (currentFolder === "inbox") return mail.direction === "received" && mail.myUsers.includes(currentUser.id);
      if (currentFolder === "sent") return mail.direction === "sent" && mail.sentBy === currentUser.id;
      if (currentFolder === "all") return mail.myUsers.includes(currentUser.id) || mail.sentBy === currentUser.id;
      return false;
    }

    if (currentScope === "company") {
      if (!canSee) return false;
      if (currentFolder === "inbox") return mail.direction === "received";
      if (currentFolder === "sent") return mail.direction === "sent";
      if (currentFolder === "all") return true;
      return false;
    }

    const selectedAddress = getAddressByKey(currentScope);

    if (selectedAddress) {
      if (!canUseSendAddress(selectedAddress)) return false;
      if (!canSee) return false;

      const addressMatched = mail.to === selectedAddress.address || mail.from === selectedAddress.address;
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

  if (!selectedMailId && visibleMails.length > 0) {
    selectedMailId = visibleMails[0].id;
  }

  const folderName = getFolderName(currentFolder);
  const scopeName = getScopeName(currentScope);

  pageTitle.innerHTML = `${scopeName} · ${folderName} <span>${visibleMails.length}건</span>`;
  userInfo.textContent = `${currentUser.name} · ${currentUser.role === "admin" ? "관리자" : currentUser.dept}`;

  mailTableBody.innerHTML = visibleMails
    .map((mail) => {
      const readState = getReadState(mail);
      const unreadClass =
        mail.direction === "received" && readState.type === "unread" ? "unread" : "";
      const selectedClass = mail.id === selectedMailId ? "selected" : "";

      return `
        <tr class="${unreadClass} ${selectedClass}" data-mail-id="${mail.id}">
          <td><input type="checkbox" /></td>
          <td>${mail.starred ? "★" : "☆"}</td>
          <td>${mail.hasAttachment ? "📎" : ""}</td>
          <td>${mail.direction === "sent" ? mail.to : mail.from}</td>
          <td class="subject">${mail.subject}</td>
          <td><span class="project-chip">${getProjectName(mail.projectId)}</span></td>
          <td class="from-identity">${mail.direction === "sent" ? mail.fromIdentity : mail.toIdentity}</td>
          <td class="author-cell">${mail.direction === "sent" ? getUserName(mail.signedBy || mail.sentBy) : "-"}</td>
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
  const fromLine = `${mail.fromIdentity} <${mail.from}>`;
  const toLine = `${mail.toIdentity} <${mail.to}>`;
  const authorName = getUserName(mail.signedBy || mail.sentBy);
  const signatureHtml = mail.direction === "sent"
    ? `<div class="signature-box">${escapeHtml(buildSignature(mail.signatureType, getUserById(mail.signedBy || mail.sentBy), getAddressByEmail(mail.from)))}</div>`
    : "";

  detailBody.className = "";
  detailBody.innerHTML = `
    <h2 class="detail-title">${mail.subject}</h2>

    <div class="detail-meta">
      <div><span class="detail-label">From</span><strong>${fromLine}</strong></div>
      <div><span class="detail-label">To</span><span>${toLine}</span></div>
      <div><span class="detail-label">Reply-To</span><span>${mail.replyTo || mail.to}</span></div>
      <div><span class="detail-label">Date</span><span>${mail.date}</span></div>
      <div><span class="detail-label">Size</span><span>${mail.size}</span></div>
    </div>

    <div class="detail-card">
      <h4>SEND IDENTITY</h4>
      <p>발신 주체: <span class="identity-chip">${mail.direction === "sent" ? mail.fromIdentity : mail.toIdentity}</span></p>
      <p>내부 작성자: <span class="signature-chip">${mail.direction === "sent" ? authorName : "수신 메일"}</span></p>
      <p>개념: 고객에게 보이는 From은 팀이고, 실제 작성자와 서명은 사용자 기준입니다.</p>
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
      <h4>MESSAGE</h4>
      <p>
        이 영역은 메일 본문 미리보기입니다. 실제 연동 후에는 Gmail API,
        Microsoft Graph API, NAVER WORKS Mail API에서 가져온 본문이 표시됩니다.
      </p>
      ${signatureHtml}
    </div>

    <div class="detail-actions">
      <button class="primary" id="detailReplyButton">답장</button>
      <button>전달</button>
      <button>프로젝트 연결</button>
      <button>담당 변경</button>
    </div>
  `;

  document.getElementById("detailReplyButton").addEventListener("click", openReplyToSelectedMail);
}

function openCompose(options = {}) {
  const usableAddresses = sendAddresses.filter((item) => canUseSendAddress(item));

  composeTitle.textContent = options.mode === "reply" ? "답장" : "새 메일";
  composeFromSelect.innerHTML = usableAddresses
    .map((address) => {
      return `<option value="${address.key}">${address.displayName} <${address.address}></option>`;
    })
    .join("");

  const defaultAddress = getDefaultComposeAddress(usableAddresses, options.replyMail);
  composeFromSelect.value = defaultAddress ? defaultAddress.key : usableAddresses[0]?.key;

  composeSignatureSelect.innerHTML = signatureTemplates
    .map((signature) => `<option value="${signature.id}">${signature.label}</option>`)
    .join("");

  composeSignatureSelect.value = "user-default";
  composeAuthorInput.value = `${currentUser.name} · ${currentUser.dept} · ${currentUser.title}`;
  composeToInput.value = options.to || "";
  composeSubjectInput.value = options.subject || "";
  composeBodyInput.value = options.body || "";

  updateComposeSignaturePreview();
  composeModal.classList.remove("hidden");
}

function openReplyToSelectedMail() {
  const visibleMails = getVisibleMails();
  const mail = visibleMails.find((item) => item.id === selectedMailId);

  if (!mail) return;

  const replyTo = mail.direction === "sent" ? mail.to : mail.from;
  const subject = mail.subject.startsWith("Re:") ? mail.subject : `Re: ${mail.subject}`;

  openCompose({
    mode: "reply",
    replyMail: mail,
    to: replyTo,
    subject,
    body: `\n\n----- Original Message -----\nFrom: ${mail.fromIdentity} <${mail.from}>\nTo: ${mail.toIdentity} <${mail.to}>\nSubject: ${mail.subject}\n`,
  });
}

function closeCompose() {
  composeModal.classList.add("hidden");
}

function updateComposeSignaturePreview() {
  const address = getAddressByKey(composeFromSelect.value);
  const signatureId = composeSignatureSelect.value;
  signaturePreview.textContent = buildSignature(signatureId, currentUser, address);
}

function sendDemoMail() {
  const address = getAddressByKey(composeFromSelect.value);
  const signatureId = composeSignatureSelect.value;

  if (!address) return;

  const newMail = {
    id: getNextMailId(),
    direction: "sent",
    from: address.address,
    fromIdentity: address.displayName,
    to: composeToInput.value.trim() || "customer@example.com",
    toIdentity: "Customer",
    replyTo: address.replyTo,
    sentBy: currentUser.id,
    signedBy: currentUser.id,
    signatureType: signatureId,
    myUsers: [currentUser.id],
    subject: composeSubjectInput.value.trim() || "(제목 없음)",
    date: getNowText(),
    size: "12.4 KB",
    hasAttachment: false,
    starred: false,
    dept: address.defaultDept,
    projectId: currentProjectId !== "all" ? currentProjectId : "s4212247",
    status: "처리완료",
    readBy: [currentUser.id],
    requiredReaders: [currentUser.id],
  };

  mails.unshift(newMail);
  currentFolder = "sent";
  selectedMailId = newMail.id;

  document.querySelectorAll("#folderList li").forEach((li) => {
    li.classList.toggle("active", li.dataset.folder === "sent");
  });

  closeCompose();
  renderMails();
}

function buildSignature(signatureId, user, address) {
  if (!user || !address || signatureId === "none") return "";

  if (signatureId === "team-default") {
    return [
      "--",
      address.displayName,
      "MONAS Progressive Cavity Pump Solutions",
      `Email. ${address.address}`,
      "Web. www.monas.co.kr",
    ].join("\n");
  }

  return [
    "--",
    user.name,
    user.title,
    user.dept,
    "MONAS",
    `Tel. ${user.phone}`,
    `Mobile. ${user.mobile}`,
    `Email. ${address.address}`,
    "",
    "MONAS Progressive Cavity Pump Solutions",
  ].join("\n");
}

function getDefaultComposeAddress(usableAddresses, replyMail) {
  if (replyMail) {
    const matched = usableAddresses.find((address) => {
      return address.address === replyMail.to || address.address === replyMail.from;
    });

    if (matched) return matched;
  }

  if (currentScope !== "company" && currentScope !== "personal") {
    const scoped = usableAddresses.find((address) => address.key === currentScope);
    if (scoped) return scoped;
  }

  const deptMatched = usableAddresses.find((address) => address.defaultDept === currentUser.dept);
  return deptMatched || usableAddresses[0];
}

function getAddressByKey(key) {
  return sendAddresses.find((item) => item.key === key);
}

function getAddressByEmail(email) {
  return sendAddresses.find((item) => item.address === email);
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

function getUserById(userId) {
  return users.find((item) => item.id === userId);
}

function getUserName(userId) {
  const user = getUserById(userId);
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

function getNextMailId() {
  return Math.max(...mails.map((mail) => mail.id)) + 1;
}

function getNowText() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hh = String(now.getHours()).padStart(2, "0");
  const mi = String(now.getMinutes()).padStart(2, "0");

  return `${yyyy}.${mm}.${dd} ${hh}:${mi}`;
}

function escapeHtml(text) {
  return String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

init();
