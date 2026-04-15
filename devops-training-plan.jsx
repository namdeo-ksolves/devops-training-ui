import { useState } from "react";

const trainingData = [
  {
    phase: 1,
    title: "Foundation & Linux Mastery",
    duration: "Weeks 1–3",
    icon: "🧱",
    description: "Build rock-solid fundamentals before touching orchestration. Every tool in the stack runs on Linux.",
    topics: [
      {
        name: "Linux Administration Deep Dive",
        items: [
          "File system hierarchy, permissions (chmod, chown, ACLs)",
          "Process management (systemd, journalctl, cgroups, namespaces)",
          "Networking essentials (iptables/nftables, DNS, TCP/IP, ss, netstat)",
          "Storage management (LVM, fdisk, mount, fstab, XFS/ext4)",
          "Shell scripting & automation (bash, awk, sed, cron)",
          "SELinux / AppArmor basics",
          "SSH hardening & key management",
        ],
        resources: [
          { label: "Linux Foundation Free Course", url: "https://training.linuxfoundation.org/training/introduction-to-linux/" },
          { label: "RHCSA Objectives (practice list)", url: "https://www.redhat.com/en/services/training/ex200-red-hat-certified-system-administrator-rhcsa-exam" },
          { label: "Linux Upskill Challenge (free)", url: "https://linuxupskillchallenge.org/" },
          { label: "The Linux Command Line (book)", url: "https://linuxcommand.org/tlcl.php" },
        ],
      },
      {
        name: "Networking Fundamentals",
        items: [
          "OSI & TCP/IP models, subnetting, CIDR",
          "DNS resolution, DHCP, NAT, load balancing concepts",
          "TLS/SSL, certificates, mTLS basics",
          "Firewall rules, network policies, VLANs",
          "Troubleshooting with tcpdump, curl, dig, traceroute",
        ],
        resources: [
          { label: "Computer Networking (Stanford free)", url: "https://www.youtube.com/playlist?list=PLoCMsyE1cvdWKsLVyf6cPwCLDIZnOj0NS" },
          { label: "Networking Fundamentals – Practical Networking", url: "https://www.practicalnetworking.net/index/networking-fundamentals/" },
        ],
      },
      {
        name: "Version Control & GitOps Basics",
        items: [
          "Git branching strategies (GitFlow, trunk-based)",
          "Pull requests, code reviews, merge conflicts",
          "Git hooks, tagging, release management",
          "Intro to GitOps philosophy",
        ],
        resources: [
          { label: "Pro Git Book (free)", url: "https://git-scm.com/book/en/v2" },
          { label: "Learn Git Branching (interactive)", url: "https://learngitbranching.js.org/" },
          { label: "Atlassian Git Tutorials", url: "https://www.atlassian.com/git/tutorials" },
        ],
      },
    ],
  },
  {
    phase: 2,
    title: "Containers & Container Runtime",
    duration: "Weeks 4–6",
    icon: "📦",
    description: "Master containers before orchestration. Understand what Kubernetes actually manages under the hood.",
    topics: [
      {
        name: "Docker / Podman Fundamentals",
        items: [
          "Container vs VM architecture",
          "Building images: Dockerfile best practices, multi-stage builds",
          "Image layers, caching, and optimization (slim images)",
          "Container networking: bridge, host, overlay",
          "Volumes, bind mounts, tmpfs",
          "Docker Compose for multi-container apps",
          "Podman as a rootless alternative (critical for OpenShift)",
          "Container security scanning (Trivy, Grype)",
        ],
        resources: [
          { label: "Docker Official Getting Started", url: "https://docs.docker.com/get-started/" },
          { label: "Podman Documentation", url: "https://podman.io/docs" },
          { label: "Docker Deep Dive (Nigel Poulton)", url: "https://nigelpoulton.com/books/" },
          { label: "Dockerfile Best Practices", url: "https://docs.docker.com/build/building/best-practices/" },
        ],
      },
      {
        name: "Container Registries",
        items: [
          "Public vs private registries",
          "Harbor, Quay.io, Docker Hub",
          "Image tagging strategies, vulnerability scanning",
          "Image signing and trust (cosign, Notary)",
        ],
        resources: [
          { label: "Harbor Registry Docs", url: "https://goharbor.io/docs/" },
          { label: "Quay.io Documentation", url: "https://docs.quay.io/" },
        ],
      },
    ],
  },
  {
    phase: 3,
    title: "Kubernetes Core",
    duration: "Weeks 7–12",
    icon: "☸️",
    description: "The heart of modern infrastructure. Spend the most time here — everything else builds on K8s knowledge.",
    topics: [
      {
        name: "Architecture & Core Concepts",
        items: [
          "Control plane: API server, etcd, scheduler, controller manager",
          "Worker nodes: kubelet, kube-proxy, container runtime (CRI)",
          "Declarative vs imperative management",
          "Pods, ReplicaSets, Deployments, DaemonSets, StatefulSets",
          "Services (ClusterIP, NodePort, LoadBalancer, ExternalName)",
          "Namespaces, labels, selectors, annotations",
        ],
        resources: [
          { label: "Kubernetes Official Docs", url: "https://kubernetes.io/docs/home/" },
          { label: "Kubernetes The Hard Way (Kelsey Hightower)", url: "https://github.com/kelseyhightower/kubernetes-the-hard-way" },
          { label: "KodeKloud CKA Course", url: "https://kodekloud.com/courses/certified-kubernetes-administrator-cka/" },
          { label: "Kubernetes Basics (interactive)", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
        ],
      },
      {
        name: "Configuration & Storage",
        items: [
          "ConfigMaps and Secrets management",
          "PersistentVolumes (PV) & PersistentVolumeClaims (PVC)",
          "StorageClasses, dynamic provisioning",
          "Resource requests & limits (CPU, memory)",
          "LimitRanges and ResourceQuotas",
          "Environment variables, downward API",
        ],
        resources: [
          { label: "K8s Storage Docs", url: "https://kubernetes.io/docs/concepts/storage/" },
          { label: "Managing Resources for Containers", url: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/" },
        ],
      },
      {
        name: "Networking in Kubernetes",
        items: [
          "CNI plugins (Calico, Flannel, Cilium)",
          "Pod-to-Pod, Pod-to-Service networking",
          "Ingress controllers (NGINX, HAProxy, Traefik)",
          "Network Policies for microsegmentation",
          "Service mesh concepts (Istio / Linkerd intro)",
          "CoreDNS and service discovery",
        ],
        resources: [
          { label: "Kubernetes Networking Model", url: "https://kubernetes.io/docs/concepts/services-networking/" },
          { label: "Calico Documentation", url: "https://docs.tigera.io/calico/latest/about/" },
          { label: "Cilium Docs", url: "https://docs.cilium.io/en/stable/" },
        ],
      },
      {
        name: "Security & RBAC",
        items: [
          "RBAC: Roles, ClusterRoles, RoleBindings",
          "Service Accounts and token management",
          "Pod Security Standards (restricted, baseline, privileged)",
          "SecurityContext, seccomp, AppArmor profiles",
          "Secrets management (Sealed Secrets, Vault integration)",
          "Audit logging, admission controllers (OPA/Gatekeeper)",
        ],
        resources: [
          { label: "K8s RBAC Documentation", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/" },
          { label: "Pod Security Standards", url: "https://kubernetes.io/docs/concepts/security/pod-security-standards/" },
          { label: "OPA Gatekeeper", url: "https://open-policy-agent.github.io/gatekeeper/" },
        ],
      },
      {
        name: "Observability & Troubleshooting",
        items: [
          "kubectl debug, logs, describe, exec",
          "Events, conditions, and pod lifecycle",
          "Prometheus + Grafana stack for metrics",
          "Liveness, readiness, and startup probes",
          "Node & pod troubleshooting patterns",
          "Resource monitoring with metrics-server",
        ],
        resources: [
          { label: "K8s Troubleshooting Guide", url: "https://kubernetes.io/docs/tasks/debug/" },
          { label: "Prometheus Docs", url: "https://prometheus.io/docs/introduction/overview/" },
          { label: "Grafana Tutorials", url: "https://grafana.com/tutorials/" },
        ],
      },
      {
        name: "Helm & Package Management",
        items: [
          "Helm charts: structure, values, templates",
          "Creating, packaging, and publishing charts",
          "Helm repositories, versioning, rollback",
          "Kustomize as an alternative/complement",
        ],
        resources: [
          { label: "Helm Official Docs", url: "https://helm.sh/docs/" },
          { label: "Artifact Hub (chart discovery)", url: "https://artifacthub.io/" },
          { label: "Kustomize Docs", url: "https://kustomize.io/" },
        ],
      },
    ],
  },
  {
    phase: 4,
    title: "OpenShift (Enterprise Kubernetes)",
    duration: "Weeks 13–16",
    icon: "🎩",
    description: "OpenShift adds enterprise features on top of K8s. Learn what's different and why on-prem teams choose it.",
    topics: [
      {
        name: "OpenShift Architecture & Differences",
        items: [
          "OpenShift vs vanilla Kubernetes (what's added)",
          "CRC (CodeReady Containers) for local dev",
          "oc CLI vs kubectl differences",
          "OpenShift Web Console deep dive",
          "Projects vs Namespaces",
          "Routes vs Ingress (HAProxy router)",
        ],
        resources: [
          { label: "OpenShift Documentation", url: "https://docs.openshift.com/" },
          { label: "OpenShift Learning Portal", url: "https://developers.redhat.com/learn" },
          { label: "CRC Setup Guide", url: "https://developers.redhat.com/products/openshift-local/overview" },
        ],
      },
      {
        name: "OpenShift-Specific Features",
        items: [
          "Builds & BuildConfigs (S2I — Source to Image)",
          "ImageStreams and image management",
          "DeploymentConfigs vs Deployments",
          "OpenShift SDN / OVN-Kubernetes networking",
          "SCCs (Security Context Constraints)",
          "Operators & OperatorHub",
          "OAuth & identity providers integration",
          "Machine management & cluster scaling",
        ],
        resources: [
          { label: "OpenShift Operators Guide", url: "https://docs.openshift.com/container-platform/latest/operators/understanding/olm-understanding-operatorhub.html" },
          { label: "Red Hat DO280 Course Objectives", url: "https://www.redhat.com/en/services/training/do280-red-hat-openshift-administration-ii-operating-a-production-kubernetes-cluster" },
        ],
      },
      {
        name: "OpenShift Day-2 Operations",
        items: [
          "Cluster upgrades and maintenance windows",
          "etcd backup and restore",
          "Certificate rotation",
          "Monitoring with built-in Prometheus/Alertmanager",
          "Log forwarding (Loki/Fluentd/Vector)",
          "Must-gather for support cases",
        ],
        resources: [
          { label: "OpenShift Day-2 Operations", url: "https://docs.openshift.com/container-platform/latest/post_installation_configuration/index.html" },
        ],
      },
    ],
  },
  {
    phase: 5,
    title: "Ceph Storage",
    duration: "Weeks 17–19",
    icon: "💾",
    description: "Software-defined storage for on-prem clusters. Ceph provides block, file, and object storage unified.",
    topics: [
      {
        name: "Ceph Architecture",
        items: [
          "RADOS: the foundation (OSDs, MONs, MGRs, MDS)",
          "CRUSH algorithm and data placement",
          "Pools, PGs (placement groups), replication vs erasure coding",
          "Ceph cluster topology and failure domains",
          "BlueStore vs FileStore (legacy)",
        ],
        resources: [
          { label: "Ceph Official Documentation", url: "https://docs.ceph.com/en/latest/" },
          { label: "Ceph Architecture Overview", url: "https://docs.ceph.com/en/latest/architecture/" },
          { label: "Learn Ceph (Red Hat)", url: "https://www.redhat.com/en/technologies/storage/ceph" },
        ],
      },
      {
        name: "Ceph Deployment & Operations",
        items: [
          "Deploying with cephadm (recommended modern method)",
          "Rook-Ceph operator for Kubernetes-native deployment",
          "RBD (RADOS Block Device) for K8s PVs",
          "CephFS for shared file storage",
          "RGW (RADOS Gateway) for S3-compatible object storage",
          "Monitoring with Ceph Dashboard & Grafana",
          "Tuning, scrubbing, recovery operations",
          "Scaling: adding/removing OSDs, rebalancing",
        ],
        resources: [
          { label: "Rook-Ceph Operator Docs", url: "https://rook.io/docs/rook/latest-release/Getting-Started/intro/" },
          { label: "Cephadm Deployment Guide", url: "https://docs.ceph.com/en/latest/cephadm/" },
          { label: "Ceph Operations Guide", url: "https://docs.ceph.com/en/latest/rados/operations/" },
        ],
      },
    ],
  },
  {
    phase: 6,
    title: "OpenSearch (Logging & Search)",
    duration: "Weeks 20–22",
    icon: "🔍",
    description: "Centralized logging and full-text search. The open-source fork of Elasticsearch your logs deserve.",
    topics: [
      {
        name: "OpenSearch Core",
        items: [
          "Architecture: nodes, shards, replicas, clusters",
          "Index management, mappings, and templates",
          "Query DSL: full-text search, filters, aggregations",
          "Index lifecycle management (ISM policies)",
          "Snapshot and restore for backups",
          "Security plugin: roles, tenants, audit logging",
        ],
        resources: [
          { label: "OpenSearch Documentation", url: "https://opensearch.org/docs/latest/" },
          { label: "OpenSearch Quickstart", url: "https://opensearch.org/docs/latest/getting-started/" },
          { label: "OpenSearch API Reference", url: "https://opensearch.org/docs/latest/api-reference/" },
        ],
      },
      {
        name: "Log Pipeline & Dashboards",
        items: [
          "Fluent Bit / Fluentd / Logstash as log shippers",
          "Data Prepper for trace/metric ingestion",
          "OpenSearch Dashboards (Kibana fork)",
          "Building visualizations and dashboards",
          "Alerting and notifications",
          "Performance tuning: JVM heap, shard sizing, bulk indexing",
          "Running OpenSearch on Kubernetes (Helm or Operator)",
        ],
        resources: [
          { label: "OpenSearch Dashboards Guide", url: "https://opensearch.org/docs/latest/dashboards/" },
          { label: "Fluent Bit Docs", url: "https://docs.fluentbit.io/manual/" },
          { label: "Data Prepper Docs", url: "https://opensearch.org/docs/latest/data-prepper/" },
        ],
      },
    ],
  },
  {
    phase: 7,
    title: "CI/CD & GitOps",
    duration: "Weeks 23–25",
    icon: "🚀",
    description: "Automate everything. Build pipelines that take code from commit to production safely.",
    topics: [
      {
        name: "CI/CD Pipelines",
        items: [
          "Jenkins / Jenkins on K8s with dynamic agents",
          "Tekton Pipelines (Kubernetes-native CI/CD)",
          "GitLab CI / GitHub Actions fundamentals",
          "Pipeline as code, stages, artifacts, caching",
          "Automated testing in pipelines (unit, integration, e2e)",
          "Container image build & push in CI",
          "Security scanning in pipelines (SAST, DAST, SCA)",
        ],
        resources: [
          { label: "Tekton Documentation", url: "https://tekton.dev/docs/" },
          { label: "Jenkins Pipeline Docs", url: "https://www.jenkins.io/doc/book/pipeline/" },
          { label: "GitLab CI/CD Docs", url: "https://docs.gitlab.com/ee/ci/" },
        ],
      },
      {
        name: "GitOps with ArgoCD / Flux",
        items: [
          "GitOps principles: single source of truth",
          "ArgoCD installation and application management",
          "App of Apps pattern, ApplicationSets",
          "Sync policies, auto-healing, pruning",
          "Multi-cluster GitOps",
          "Secrets management in GitOps (SOPS, Sealed Secrets)",
          "Flux CD as an alternative",
        ],
        resources: [
          { label: "ArgoCD Documentation", url: "https://argo-cd.readthedocs.io/en/stable/" },
          { label: "Flux CD Docs", url: "https://fluxcd.io/docs/" },
          { label: "GitOps Principles (OpenGitOps)", url: "https://opengitops.dev/" },
        ],
      },
    ],
  },
  {
    phase: 8,
    title: "Infrastructure as Code",
    duration: "Weeks 26–28",
    icon: "🏗️",
    description: "Define your infrastructure in code. Reproducible, version-controlled, peer-reviewed infrastructure.",
    topics: [
      {
        name: "Ansible for Configuration Management",
        items: [
          "Inventory, playbooks, roles, collections",
          "Ansible modules for system config, packages, services",
          "Jinja2 templating, variables, facts, vaults",
          "Ansible for K8s/OpenShift (k8s module, k8s_info)",
          "AWX / Ansible Automation Platform basics",
          "Idempotency and error handling patterns",
        ],
        resources: [
          { label: "Ansible Documentation", url: "https://docs.ansible.com/ansible/latest/index.html" },
          { label: "Ansible for DevOps (book)", url: "https://www.ansiblefordevops.com/" },
          { label: "Red Hat Ansible Automation", url: "https://www.redhat.com/en/technologies/management/ansible" },
        ],
      },
      {
        name: "Terraform (for hybrid/multi-cloud)",
        items: [
          "HCL syntax, providers, resources, data sources",
          "State management (remote backends, locking)",
          "Modules, workspaces, variable files",
          "Terraform for on-prem (vSphere, bare metal providers)",
          "Provisioning K8s resources with Terraform",
          "OpenTofu as the open-source fork",
        ],
        resources: [
          { label: "Terraform Learn (HashiCorp)", url: "https://developer.hashicorp.com/terraform/tutorials" },
          { label: "OpenTofu Documentation", url: "https://opentofu.org/docs/" },
        ],
      },
    ],
  },
  {
    phase: 9,
    title: "Advanced Ops & Reliability",
    duration: "Weeks 29–32",
    icon: "🛡️",
    description: "Production readiness. Disaster recovery, high availability, and keeping everything running at 3 AM.",
    topics: [
      {
        name: "Monitoring & Alerting Stack",
        items: [
          "Prometheus: PromQL, recording rules, alerting rules",
          "Alertmanager: routing, silencing, inhibition",
          "Grafana: dashboards, variables, annotations",
          "Thanos / Cortex for long-term metrics storage",
          "Uptime monitoring and SLIs/SLOs/SLAs",
          "On-call practices, runbooks, incident response",
        ],
        resources: [
          { label: "Prometheus Best Practices", url: "https://prometheus.io/docs/practices/" },
          { label: "Thanos Documentation", url: "https://thanos.io/tip/thanos/getting-started.md/" },
          { label: "Google SRE Book (free)", url: "https://sre.google/sre-book/table-of-contents/" },
        ],
      },
      {
        name: "Backup, DR & HA",
        items: [
          "etcd backup and restore procedures",
          "Velero for K8s workload backup",
          "Ceph disaster recovery and stretching",
          "Multi-cluster and federation strategies",
          "Chaos engineering basics (Litmus, Chaos Mesh)",
          "Certificate and secret rotation automation",
          "Capacity planning and cluster right-sizing",
        ],
        resources: [
          { label: "Velero Documentation", url: "https://velero.io/docs/" },
          { label: "Litmus Chaos Engineering", url: "https://litmuschaos.io/docs" },
          { label: "Chaos Mesh Docs", url: "https://chaos-mesh.org/docs/" },
        ],
      },
      {
        name: "Performance & Tuning",
        items: [
          "Kernel tuning for containers (sysctl, ulimits)",
          "Network performance (MTU, CNI tuning)",
          "Storage I/O optimization for Ceph",
          "JVM tuning for OpenSearch / Java workloads",
          "Horizontal Pod Autoscaler (HPA) and VPA",
          "Cluster Autoscaler and node scaling strategies",
        ],
        resources: [
          { label: "K8s HPA Docs", url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/" },
          { label: "Ceph Performance Tuning", url: "https://docs.ceph.com/en/latest/rados/configuration/" },
        ],
      },
    ],
  },
  {
    phase: 10,
    title: "Certifications & Capstone",
    duration: "Weeks 33–36",
    icon: "🎓",
    description: "Validate your skills. Build a real project that ties everything together.",
    topics: [
      {
        name: "Certification Tracks",
        items: [
          "CKA — Certified Kubernetes Administrator",
          "CKAD — Certified Kubernetes Application Developer",
          "CKS — Certified Kubernetes Security Specialist",
          "Red Hat EX280 — OpenShift Administration",
          "Red Hat EX180 — Containers & Kubernetes",
        ],
        resources: [
          { label: "CKA Exam Curriculum", url: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/" },
          { label: "CKAD Exam Details", url: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/" },
          { label: "Killer.sh CKA Simulator", url: "https://killer.sh/" },
          { label: "KodeKloud Practice Labs", url: "https://kodekloud.com/" },
        ],
      },
      {
        name: "Capstone Project Ideas",
        items: [
          "Deploy a multi-tier app on OpenShift with Ceph storage",
          "Full CI/CD pipeline: Git → Tekton → ArgoCD → OpenShift",
          "Centralized logging: Fluent Bit → OpenSearch → Dashboards",
          "Monitoring stack: Prometheus → Thanos → Grafana with alerts",
          "Disaster recovery drill: etcd restore + Velero recovery",
          "Infrastructure-as-Code: Ansible playbooks for cluster bootstrap",
        ],
        resources: [
          { label: "Kubernetes Examples Repo", url: "https://github.com/kubernetes/examples" },
          { label: "OpenShift Examples", url: "https://github.com/openshift/origin" },
        ],
      },
    ],
  },
];

const weeklyScheduleTemplate = [
  { day: "Mon–Tue", activity: "Theory & docs reading", icon: "📖" },
  { day: "Wed–Thu", activity: "Hands-on labs & practice", icon: "🔬" },
  { day: "Friday", activity: "Team review & knowledge sharing", icon: "🤝" },
];

export default function DevOpsTrainingPlan() {
  const [expandedPhase, setExpandedPhase] = useState(null);
  const [expandedTopics, setExpandedTopics] = useState({});
  const [completedItems, setCompletedItems] = useState({});

  const togglePhase = (idx) => setExpandedPhase(expandedPhase === idx ? null : idx);

  const toggleTopic = (phaseIdx, topicIdx) => {
    const key = `${phaseIdx}-${topicIdx}`;
    setExpandedTopics((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleItem = (key) => {
    setCompletedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getPhaseProgress = (phase, phaseIdx) => {
    let total = 0;
    let done = 0;
    phase.topics.forEach((topic, tIdx) => {
      topic.items.forEach((_, iIdx) => {
        total++;
        if (completedItems[`${phaseIdx}-${tIdx}-${iIdx}`]) done++;
      });
    });
    return total > 0 ? Math.round((done / total) * 100) : 0;
  };

  const totalItems = trainingData.reduce((s, p) => s + p.topics.reduce((s2, t) => s2 + t.items.length, 0), 0);
  const totalDone = Object.values(completedItems).filter(Boolean).length;
  const overallPct = totalItems > 0 ? Math.round((totalDone / totalItems) * 100) : 0;

  return (
    <div style={{
      fontFamily: "'IBM Plex Sans', 'Segoe UI', system-ui, sans-serif",
      maxWidth: 900,
      margin: "0 auto",
      padding: "32px 16px",
      color: "var(--text, #1a1a2e)",
      minHeight: "100vh",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; }

        .header-section {
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          border-radius: 20px;
          padding: 40px 32px;
          margin-bottom: 32px;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .header-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .header-section h1 {
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 6px;
          letter-spacing: -0.5px;
        }
        .header-section p {
          opacity: 0.75;
          margin: 0 0 24px;
          font-size: 15px;
          line-height: 1.5;
        }

        .overall-bar-bg {
          background: rgba(255,255,255,0.15);
          border-radius: 10px;
          height: 14px;
          width: 100%;
          overflow: hidden;
        }
        .overall-bar-fill {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, #6366f1, #a78bfa);
          transition: width 0.5s ease;
        }
        .overall-stats {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          font-size: 13px;
          opacity: 0.8;
        }

        .schedule-bar {
          display: flex;
          gap: 12px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .schedule-chip {
          background: #f0eef9;
          border: 1px solid #ddd6fe;
          border-radius: 10px;
          padding: 10px 16px;
          font-size: 13px;
          flex: 1;
          min-width: 160px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .schedule-chip strong { color: #4f46e5; }

        .phase-card {
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          margin-bottom: 14px;
          overflow: hidden;
          transition: box-shadow 0.2s;
          background: #fff;
        }
        .phase-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.06); }

        .phase-header {
          display: flex;
          align-items: center;
          padding: 18px 20px;
          cursor: pointer;
          gap: 14px;
          user-select: none;
        }
        .phase-icon {
          font-size: 26px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f3ff;
          border-radius: 12px;
          flex-shrink: 0;
        }
        .phase-meta { flex: 1; min-width: 0; }
        .phase-meta h2 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #1e1b4b;
        }
        .phase-meta span {
          font-size: 12px;
          color: #6b7280;
          font-weight: 500;
        }
        .phase-progress-mini {
          width: 56px;
          text-align: right;
          font-size: 13px;
          font-weight: 600;
          color: #6366f1;
          font-family: 'JetBrains Mono', monospace;
        }
        .phase-chevron {
          font-size: 18px;
          color: #9ca3af;
          transition: transform 0.25s;
          flex-shrink: 0;
        }
        .phase-chevron.open { transform: rotate(180deg); }

        .phase-body {
          padding: 0 20px 20px;
          border-top: 1px solid #f3f4f6;
        }
        .phase-desc {
          font-size: 14px;
          color: #6b7280;
          margin: 14px 0 18px;
          line-height: 1.55;
          font-style: italic;
        }

        .topic-block {
          margin-bottom: 16px;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
        }
        .topic-header {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          cursor: pointer;
          background: #fafafe;
          gap: 10px;
          font-weight: 600;
          font-size: 14px;
          color: #312e81;
          user-select: none;
        }
        .topic-header:hover { background: #f0eef9; }
        .topic-chevron {
          font-size: 14px;
          color: #a5b4fc;
          transition: transform 0.2s;
          margin-left: auto;
        }
        .topic-chevron.open { transform: rotate(90deg); }

        .topic-body { padding: 0 16px 16px; }

        .checklist { list-style: none; padding: 0; margin: 8px 0 0; }
        .checklist li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 6px 0;
          font-size: 13.5px;
          line-height: 1.5;
          color: #374151;
          cursor: pointer;
        }
        .checklist li:hover { color: #111827; }
        .check-box {
          width: 18px;
          height: 18px;
          border-radius: 5px;
          border: 2px solid #c7d2fe;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
          transition: all 0.15s;
          font-size: 11px;
        }
        .check-box.checked {
          background: #6366f1;
          border-color: #6366f1;
          color: #fff;
        }
        .item-done { text-decoration: line-through; opacity: 0.5; }

        .resources-section {
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px dashed #e5e7eb;
        }
        .resources-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #9ca3af;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .resource-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #eef2ff;
          color: #4338ca;
          text-decoration: none;
          font-size: 12.5px;
          padding: 5px 11px;
          border-radius: 6px;
          margin: 0 6px 6px 0;
          font-weight: 500;
          transition: background 0.15s;
        }
        .resource-link:hover { background: #ddd6fe; }

        .footer-note {
          text-align: center;
          color: #9ca3af;
          font-size: 12px;
          margin-top: 32px;
          padding-top: 20px;
          border-top: 1px solid #f3f4f6;
          line-height: 1.6;
        }
      `}</style>

      {/* Header */}
      <div className="header-section">
        <h1>DevOps Team Training Plan</h1>
        <p>
          36-week structured program covering Kubernetes, OpenShift, Ceph, OpenSearch,
          CI/CD, IaC, and production reliability — designed for on-prem teams.
        </p>
        <div className="overall-bar-bg">
          <div className="overall-bar-fill" style={{ width: `${overallPct}%` }} />
        </div>
        <div className="overall-stats">
          <span>{totalDone} / {totalItems} topics completed</span>
          <span>{overallPct}%</span>
        </div>
      </div>

      {/* Weekly Cadence */}
      <div className="schedule-bar">
        {weeklyScheduleTemplate.map((s, i) => (
          <div key={i} className="schedule-chip">
            <span>{s.icon}</span>
            <span><strong>{s.day}</strong> — {s.activity}</span>
          </div>
        ))}
      </div>

      {/* Phases */}
      {trainingData.map((phase, pIdx) => {
        const isOpen = expandedPhase === pIdx;
        const progress = getPhaseProgress(phase, pIdx);
        return (
          <div key={pIdx} className="phase-card">
            <div className="phase-header" onClick={() => togglePhase(pIdx)}>
              <div className="phase-icon">{phase.icon}</div>
              <div className="phase-meta">
                <h2>Phase {phase.phase}: {phase.title}</h2>
                <span>{phase.duration}</span>
              </div>
              <div className="phase-progress-mini">{progress}%</div>
              <div className={`phase-chevron ${isOpen ? "open" : ""}`}>▼</div>
            </div>
            {isOpen && (
              <div className="phase-body">
                <div className="phase-desc">{phase.description}</div>
                {phase.topics.map((topic, tIdx) => {
                  const tKey = `${pIdx}-${tIdx}`;
                  const tOpen = expandedTopics[tKey];
                  return (
                    <div key={tIdx} className="topic-block">
                      <div className="topic-header" onClick={() => toggleTopic(pIdx, tIdx)}>
                        <span className={`topic-chevron ${tOpen ? "open" : ""}`}>▶</span>
                        {topic.name}
                      </div>
                      {tOpen && (
                        <div className="topic-body">
                          <ul className="checklist">
                            {topic.items.map((item, iIdx) => {
                              const itemKey = `${pIdx}-${tIdx}-${iIdx}`;
                              const checked = !!completedItems[itemKey];
                              return (
                                <li key={iIdx} onClick={() => toggleItem(itemKey)}>
                                  <div className={`check-box ${checked ? "checked" : ""}`}>
                                    {checked && "✓"}
                                  </div>
                                  <span className={checked ? "item-done" : ""}>{item}</span>
                                </li>
                              );
                            })}
                          </ul>
                          <div className="resources-section">
                            <div className="resources-label">Learning Resources</div>
                            <div>
                              {topic.resources.map((r, rIdx) => (
                                <a
                                  key={rIdx}
                                  href={r.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="resource-link"
                                >
                                  ↗ {r.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      <div className="footer-note">
        Tip: Check off items as your team completes them. Each phase builds on the last.<br />
        Adjust the timeline based on your team's prior experience — skip what you already know.
      </div>
    </div>
  );
}
