import { useState } from "react";

const trainingData = [
  {
    phase: 1,
    title: "Linux & Networking Essentials",
    duration: "Weeks 1–2",
    icon: "🐧",
    description: "Every on-prem tool runs on Linux. Sharpen advanced admin, networking, firewalls, and automation skills.",
    topics: [
      {
        name: "Linux System Administration",
        items: [
          "File system hierarchy (FHS), permissions, POSIX ACLs",
          "systemd: unit files, targets, journalctl, timers",
          "Process isolation: cgroups v2, namespaces (foundation for containers)",
          "LVM, RAID, disk partitioning, XFS/ext4, fstab, autofs",
          "Shell scripting & automation: bash, awk, sed, cron, at",
          "SELinux: modes, contexts, booleans, troubleshooting with audit2why",
          "SSH hardening: key-only auth, jump hosts, port knocking",
          "Kernel tuning: sysctl.conf, ulimits, hugepages for databases",
          "Performance analysis: top, htop, vmstat, iostat, sar, perf",
        ],
        resources: [
          { label: "Linux Foundation — Intro to Linux (Free)", url: "https://training.linuxfoundation.org/training/introduction-to-linux/" },
          { label: "Red Hat — RHCSA Exam Objectives (EX200)", url: "https://www.redhat.com/en/services/training/ex200-red-hat-certified-system-administrator-rhcsa-exam" },
          { label: "Red Hat — RHCE Exam Objectives (EX294)", url: "https://www.redhat.com/en/services/training/ex294-red-hat-certified-engineer-rhce-exam-red-hat-enterprise-linux-9" },
          { label: "Linux Upskill Challenge (Free)", url: "https://linuxupskillchallenge.org/" },
          { label: "The Linux Command Line — William Shotts (Free Book)", url: "https://linuxcommand.org/tlcl.php" },
          { label: "Red Hat — SELinux Guide", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/using_selinux/index" },
          { label: "Linux Performance — Brendan Gregg", url: "https://www.brendangregg.com/linuxperf.html" },
        ],
      },
      {
        name: "Networking & Security Fundamentals",
        items: [
          "TCP/IP stack, OSI model, subnetting, CIDR notation",
          "DNS resolution chain, DHCP, NAT, VLANs, LACP bonding",
          "iptables / nftables: chains, tables, NAT, port forwarding",
          "TLS/SSL: certificate chain, CA, SAN certs, mTLS",
          "Load balancing concepts: L4 vs L7, HAProxy, keepalived",
          "Troubleshooting toolkit: tcpdump, ss, dig, nslookup, traceroute, mtr, curl",
          "Network bridging & bonding for on-prem bare metal",
          "Firewalld zones and rich rules",
        ],
        resources: [
          { label: "Red Hat — Networking Guide (RHEL 9)", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_and_managing_networking/index" },
          { label: "Practical Networking — Fundamentals Series", url: "https://www.practicalnetworking.net/index/networking-fundamentals/" },
          { label: "Stanford — Computer Networking (Free YouTube)", url: "https://www.youtube.com/playlist?list=PLoCMsyE1cvdWKsLVyf6cPwCLDIZnOj0NS" },
          { label: "Cloudflare — Learning Center (TLS/DNS)", url: "https://www.cloudflare.com/learning/" },
          { label: "HAProxy Documentation", url: "https://docs.haproxy.org/" },
        ],
      },
      {
        name: "Git & Version Control",
        items: [
          "Git internals: objects, refs, packfiles",
          "Branching strategies: GitFlow, trunk-based development",
          "Pull requests, code reviews, merge vs rebase",
          "Git hooks, tagging, semantic versioning, changelogs",
          "Intro to GitOps philosophy (declarative, versioned, automated)",
        ],
        resources: [
          { label: "Pro Git — Scott Chacon (Free Official Book)", url: "https://git-scm.com/book/en/v2" },
          { label: "Learn Git Branching (Interactive)", url: "https://learngitbranching.js.org/" },
          { label: "Atlassian — Git Tutorials", url: "https://www.atlassian.com/git/tutorials" },
          { label: "GitHub — Git Handbook", url: "https://docs.github.com/en/get-started/using-git/about-git" },
        ],
      },
    ],
  },
  {
    phase: 2,
    title: "Containers & Registries",
    duration: "Week 3",
    icon: "📦",
    description: "Master container fundamentals — images, networking, storage, security, and private registries.",
    topics: [
      {
        name: "Docker & Podman",
        items: [
          "Container vs VM: kernel sharing, cgroups, namespaces",
          "Dockerfile: multi-stage builds, layer caching, .dockerignore",
          "Image optimization: distroless, scratch, Alpine, slim variants",
          "Container networking: bridge, host, overlay, macvlan",
          "Storage: volumes, bind mounts, tmpfs, named volumes",
          "Docker Compose: multi-service stacks, depends_on, healthchecks",
          "Podman: rootless containers, pods, systemd integration (critical for OpenShift)",
          "Buildah: building OCI images without a daemon",
          "Skopeo: copying/inspecting images across registries",
          "Security scanning: Trivy, Grype, Clair",
        ],
        resources: [
          { label: "Docker — Official Getting Started", url: "https://docs.docker.com/get-started/" },
          { label: "Docker — Dockerfile Best Practices", url: "https://docs.docker.com/build/building/best-practices/" },
          { label: "Podman — Official Documentation", url: "https://podman.io/docs" },
          { label: "Buildah — Official Docs", url: "https://buildah.io/" },
          { label: "Skopeo — GitHub", url: "https://github.com/containers/skopeo" },
          { label: "Red Hat — Container Tools Guide", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/building_running_and_managing_containers/index" },
          { label: "Aqua Security — Trivy Scanner", url: "https://aquasecurity.github.io/trivy/" },
          { label: "Google — Distroless Container Images", url: "https://github.com/GoogleContainerTools/distroless" },
        ],
      },
      {
        name: "Private Container Registries",
        items: [
          "Harbor: installation, projects, robot accounts, replication",
          "Quay.io / Red Hat Quay: organizations, mirroring",
          "Image tagging strategies: semver, git-sha, latest pitfalls",
          "Vulnerability scanning & policies in registries",
          "Image signing: cosign (Sigstore), Notary v2",
          "Registry HA, storage backends, garbage collection",
        ],
        resources: [
          { label: "Harbor — Official Documentation", url: "https://goharbor.io/docs/" },
          { label: "Red Hat Quay — Documentation", url: "https://docs.quay.io/" },
          { label: "Sigstore — cosign Documentation", url: "https://docs.sigstore.dev/" },
          { label: "OCI Distribution Spec", url: "https://github.com/opencontainers/distribution-spec" },
        ],
      },
    ],
  },
  {
    phase: 3,
    title: "Kubernetes Core",
    duration: "Weeks 4–6",
    icon: "☸️",
    description: "The heart of on-prem orchestration — architecture, workloads, storage, networking, and security.",
    topics: [
      {
        name: "Architecture & Workloads",
        items: [
          "Control plane: kube-apiserver, etcd, kube-scheduler, kube-controller-manager",
          "Worker nodes: kubelet, kube-proxy, container runtime (CRI-O / containerd)",
          "Declarative model: desired state vs actual state reconciliation",
          "Pods: lifecycle, init containers, sidecar pattern, ephemeral containers",
          "Deployments: rolling updates, rollbacks, maxSurge, maxUnavailable",
          "StatefulSets: ordered deploy, stable network IDs, persistent storage",
          "DaemonSets, Jobs, CronJobs use cases",
          "Services: ClusterIP, NodePort, LoadBalancer, ExternalName, headless",
          "Namespaces, labels, selectors, annotations, finalizers",
        ],
        resources: [
          { label: "Kubernetes — Official Documentation", url: "https://kubernetes.io/docs/home/" },
          { label: "Kubernetes — Concepts Deep Dive", url: "https://kubernetes.io/docs/concepts/" },
          { label: "Kubernetes The Hard Way — Kelsey Hightower", url: "https://github.com/kelseyhightower/kubernetes-the-hard-way" },
          { label: "KodeKloud — CKA Course", url: "https://kodekloud.com/courses/certified-kubernetes-administrator-cka/" },
          { label: "Kubernetes — Interactive Tutorial", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
          { label: "CNCF — Kubernetes Documentation", url: "https://www.cncf.io/projects/kubernetes/" },
        ],
      },
      {
        name: "Configuration & Storage",
        items: [
          "ConfigMaps: creation, mounting as volumes, env injection, immutable",
          "Secrets: types (Opaque, TLS, dockerconfigjson), encryption at rest",
          "PersistentVolumes (PV): access modes (RWO, RWX, ROX), reclaim policies",
          "PersistentVolumeClaims (PVC): dynamic provisioning, expansion",
          "StorageClasses: provisioners, parameters, binding modes",
          "Resource management: requests, limits, QoS classes (Guaranteed, Burstable, BestEffort)",
          "LimitRanges, ResourceQuotas per namespace",
          "Downward API: exposing pod/container metadata",
        ],
        resources: [
          { label: "Kubernetes — Storage Documentation", url: "https://kubernetes.io/docs/concepts/storage/" },
          { label: "Kubernetes — Configure a Pod (ConfigMaps)", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/" },
          { label: "Kubernetes — Managing Resources", url: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/" },
          { label: "Kubernetes — Secrets Documentation", url: "https://kubernetes.io/docs/concepts/configuration/secret/" },
        ],
      },
      {
        name: "Networking",
        items: [
          "K8s networking model: every pod gets an IP, no NAT between pods",
          "CNI plugins: Calico (BGP, eBPF), Cilium (eBPF), Flannel (overlay)",
          "Service networking: kube-proxy modes (iptables, IPVS)",
          "Ingress controllers: NGINX Ingress, HAProxy, Traefik, Contour",
          "Ingress resources: rules, TLS termination, path-based routing",
          "Network Policies: ingress/egress rules, default deny",
          "CoreDNS: service discovery, custom DNS entries, stub domains",
          "Service mesh intro: Istio / Linkerd for mTLS, observability, traffic mgmt",
        ],
        resources: [
          { label: "Kubernetes — Networking Concepts", url: "https://kubernetes.io/docs/concepts/services-networking/" },
          { label: "Calico — Official Documentation", url: "https://docs.tigera.io/calico/latest/about/" },
          { label: "Cilium — Official Documentation", url: "https://docs.cilium.io/en/stable/" },
          { label: "NGINX Ingress Controller — Docs", url: "https://kubernetes.github.io/ingress-nginx/" },
          { label: "Kubernetes — Network Policies", url: "https://kubernetes.io/docs/concepts/services-networking/network-policies/" },
          { label: "Istio — Official Documentation", url: "https://istio.io/latest/docs/" },
        ],
      },
      {
        name: "Security & RBAC",
        items: [
          "Authentication: X.509 certs, OIDC, service account tokens",
          "RBAC: Roles, ClusterRoles, RoleBindings, ClusterRoleBindings",
          "Service Accounts: default SA, bound tokens, projected volumes",
          "Pod Security Standards: privileged, baseline, restricted",
          "Pod Security Admission: enforce, audit, warn modes",
          "SecurityContext: runAsNonRoot, readOnlyRootFilesystem, capabilities",
          "Secrets management: Sealed Secrets, External Secrets Operator, HashiCorp Vault",
          "Admission controllers: OPA Gatekeeper, Kyverno policy engine",
          "Audit logging: policy levels, backends, compliance",
        ],
        resources: [
          { label: "Kubernetes — RBAC Authorization", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/" },
          { label: "Kubernetes — Pod Security Standards", url: "https://kubernetes.io/docs/concepts/security/pod-security-standards/" },
          { label: "Kubernetes — Pod Security Admission", url: "https://kubernetes.io/docs/concepts/security/pod-security-admission/" },
          { label: "OPA Gatekeeper — Official Docs", url: "https://open-policy-agent.github.io/gatekeeper/" },
          { label: "Kyverno — Official Documentation", url: "https://kyverno.io/docs/" },
          { label: "External Secrets Operator", url: "https://external-secrets.io/" },
          { label: "HashiCorp Vault — K8s Integration", url: "https://developer.hashicorp.com/vault/docs/platform/k8s" },
          { label: "Bitnami — Sealed Secrets", url: "https://github.com/bitnami-labs/sealed-secrets" },
        ],
      },
    ],
  },
  {
    phase: 4,
    title: "K8s Operations, Observability & Helm",
    duration: "Weeks 7–8",
    icon: "🔧",
    description: "Day-2 operations — full monitoring/alerting stack, systematic troubleshooting, and package management.",
    topics: [
      {
        name: "Prometheus & Grafana Stack",
        items: [
          "Prometheus architecture: scraping, TSDB, retention, federation",
          "PromQL: selectors, aggregations, rate(), histogram_quantile()",
          "Recording rules for pre-computed expensive queries",
          "Alerting rules: for duration, labels, annotations",
          "Alertmanager: routing tree, receivers, silences, inhibitions, grouping",
          "Grafana: dashboard design, variables, annotations, provisioning",
          "kube-prometheus-stack (Helm chart) for full deployment",
          "Thanos / Cortex / Mimir for long-term metric storage & HA",
          "SLIs, SLOs, SLAs: defining and measuring reliability",
        ],
        resources: [
          { label: "Prometheus — Official Documentation", url: "https://prometheus.io/docs/introduction/overview/" },
          { label: "Prometheus — Best Practices", url: "https://prometheus.io/docs/practices/" },
          { label: "Prometheus — PromQL Basics", url: "https://prometheus.io/docs/prometheus/latest/querying/basics/" },
          { label: "Grafana — Official Tutorials", url: "https://grafana.com/tutorials/" },
          { label: "Grafana — Dashboard Best Practices", url: "https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/best-practices/" },
          { label: "Thanos — Official Documentation", url: "https://thanos.io/tip/thanos/getting-started.md/" },
          { label: "Google — SRE Book (Free)", url: "https://sre.google/sre-book/table-of-contents/" },
          { label: "Google — SRE Workbook (Free)", url: "https://sre.google/workbook/table-of-contents/" },
        ],
      },
      {
        name: "Troubleshooting & Debugging",
        items: [
          "kubectl: debug, logs (--previous), describe, exec, top, events",
          "Pod states: Pending, Running, CrashLoopBackOff, ImagePullBackOff, OOMKilled, Evicted",
          "Init container & sidecar failures",
          "Node issues: NotReady, DiskPressure, MemoryPressure, PIDPressure, taints",
          "Networking debug: DNS resolution, service connectivity, policy blocking",
          "Storage issues: PVC pending, mount errors, permission denied",
          "etcd health: endpoint status, defrag, compaction, alarm management",
          "API server audit logs for debugging authorization",
        ],
        resources: [
          { label: "Kubernetes — Troubleshooting Overview", url: "https://kubernetes.io/docs/tasks/debug/" },
          { label: "Kubernetes — Debug Running Pods", url: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/" },
          { label: "Kubernetes — Debug Services", url: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/" },
          { label: "Kubernetes — Node Troubleshooting", url: "https://kubernetes.io/docs/tasks/debug/debug-cluster/" },
          { label: "etcd — Operations Guide", url: "https://etcd.io/docs/v3.5/op-guide/" },
        ],
      },
      {
        name: "Helm & Kustomize",
        items: [
          "Helm chart anatomy: Chart.yaml, values.yaml, templates/, helpers",
          "Helm templating: Go templates, built-in functions, named templates",
          "Creating, linting, packaging, publishing charts to repos",
          "Helm lifecycle: install, upgrade, rollback, hooks (pre/post)",
          "Kustomize: bases, overlays, patches, generators, transformers",
          "Helm + Kustomize: post-rendering, when to use which",
        ],
        resources: [
          { label: "Helm — Official Documentation", url: "https://helm.sh/docs/" },
          { label: "Helm — Chart Template Guide", url: "https://helm.sh/docs/chart_template_guide/" },
          { label: "Helm — Best Practices", url: "https://helm.sh/docs/chart_best_practices/" },
          { label: "Artifact Hub — Chart Discovery", url: "https://artifacthub.io/" },
          { label: "Kubernetes — Kustomize Documentation", url: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/" },
          { label: "Kustomize — Official Site", url: "https://kustomize.io/" },
        ],
      },
    ],
  },
  {
    phase: 5,
    title: "OpenShift",
    duration: "Weeks 9–10",
    icon: "🎩",
    description: "Enterprise Kubernetes for on-prem — understand what OpenShift adds, its security model, and day-2 ops.",
    topics: [
      {
        name: "Architecture & CLI",
        items: [
          "OpenShift vs vanilla K8s: built-in registry, router, monitoring, logging",
          "oc CLI: new-project, new-app, start-build, rollout, adm commands",
          "OpenShift Web Console: developer & admin perspectives",
          "Projects (namespace + RBAC defaults) vs raw Namespaces",
          "Routes vs Ingress: HAProxy router, edge/passthrough/reencrypt TLS",
          "CRC (CodeReady Containers) / OpenShift Local for development",
        ],
        resources: [
          { label: "OpenShift — Official Documentation", url: "https://docs.openshift.com/" },
          { label: "OpenShift — CLI Reference", url: "https://docs.openshift.com/container-platform/latest/cli_reference/openshift_cli/getting-started-cli.html" },
          { label: "Red Hat — Developer Learning Portal", url: "https://developers.redhat.com/learn" },
          { label: "Red Hat — OpenShift Local (CRC)", url: "https://developers.redhat.com/products/openshift-local/overview" },
          { label: "Red Hat — OpenShift Interactive Learning", url: "https://learn.openshift.com/" },
        ],
      },
      {
        name: "OpenShift Features & Security",
        items: [
          "S2I (Source-to-Image): builds from source without Dockerfile",
          "BuildConfigs: Docker, S2I, Pipeline, Custom build strategies",
          "ImageStreams: image tracking, triggers, scheduled imports",
          "DeploymentConfigs vs Deployments (legacy vs modern)",
          "SCCs (Security Context Constraints): restricted, anyuid, privileged, custom",
          "Operators: OLM (Operator Lifecycle Manager), OperatorHub, custom operators",
          "OAuth & identity: HTPasswd, LDAP, Active Directory, OIDC, GitHub",
          "OVN-Kubernetes: network policy, EgressIP, EgressFirewall, multicast",
          "Machine API, MachineSets, MachineAutoscaler for IPI clusters",
        ],
        resources: [
          { label: "OpenShift — Builds Documentation", url: "https://docs.openshift.com/container-platform/latest/cicd/builds/understanding-buildconfigs.html" },
          { label: "OpenShift — SCCs Guide", url: "https://docs.openshift.com/container-platform/latest/authentication/managing-security-context-constraints.html" },
          { label: "OpenShift — Operator Framework", url: "https://docs.openshift.com/container-platform/latest/operators/understanding/olm-understanding-operatorhub.html" },
          { label: "Red Hat — DO280 Course (OpenShift Admin II)", url: "https://www.redhat.com/en/services/training/do280-red-hat-openshift-administration-ii-operating-a-production-kubernetes-cluster" },
          { label: "Red Hat — DO180 Course (Containers & K8s)", url: "https://www.redhat.com/en/services/training/do180-red-hat-openshift-administration-i" },
          { label: "OpenShift — OVN-Kubernetes Networking", url: "https://docs.openshift.com/container-platform/latest/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes.html" },
        ],
      },
      {
        name: "OpenShift Day-2 Operations",
        items: [
          "Cluster upgrades: channels (stable, fast, candidate), upgrade paths",
          "etcd backup & restore on OpenShift",
          "Certificate management & rotation",
          "Built-in monitoring: Prometheus, Alertmanager, Grafana (read-only)",
          "Cluster logging: Loki/Fluentd/Vector stack via ClusterLogging operator",
          "Must-gather: collecting diagnostic data for support",
          "Machine Config Operator: custom node configs, kernel args, sysctls",
          "Node maintenance: cordon, drain, uncordon workflows",
        ],
        resources: [
          { label: "OpenShift — Updating Clusters", url: "https://docs.openshift.com/container-platform/latest/updating/index.html" },
          { label: "OpenShift — Backup & Restore", url: "https://docs.openshift.com/container-platform/latest/backup_and_restore/index.html" },
          { label: "OpenShift — Monitoring Guide", url: "https://docs.openshift.com/container-platform/latest/observability/monitoring/monitoring-overview.html" },
          { label: "OpenShift — Logging Documentation", url: "https://docs.openshift.com/container-platform/latest/observability/logging/cluster-logging.html" },
          { label: "OpenShift — Post-Installation Config", url: "https://docs.openshift.com/container-platform/latest/post_installation_configuration/index.html" },
        ],
      },
    ],
  },
  {
    phase: 6,
    title: "Ceph Storage",
    duration: "Weeks 11–12",
    icon: "💾",
    description: "Software-defined storage for on-prem — unified block, file, and object storage with Ceph.",
    topics: [
      {
        name: "Ceph Architecture & Internals",
        items: [
          "RADOS: the distributed object store foundation",
          "Component roles: OSDs, MONs, MGRs, MDS (for CephFS)",
          "CRUSH algorithm: deterministic data placement without lookup tables",
          "CRUSH maps: failure domains (host, rack, row, datacenter)",
          "Pools: replicated vs erasure-coded, PG calculation",
          "Placement Groups (PGs): mapping objects to OSDs",
          "BlueStore: direct block device management, checksums, compression",
          "Ceph health: HEALTH_OK, HEALTH_WARN, HEALTH_ERR states",
        ],
        resources: [
          { label: "Ceph — Official Documentation", url: "https://docs.ceph.com/en/latest/" },
          { label: "Ceph — Architecture Overview", url: "https://docs.ceph.com/en/latest/architecture/" },
          { label: "Ceph — CRUSH Maps", url: "https://docs.ceph.com/en/latest/rados/operations/crush-map/" },
          { label: "Red Hat — Ceph Storage", url: "https://www.redhat.com/en/technologies/storage/ceph" },
          { label: "Red Hat — Ceph Storage Architecture Guide", url: "https://access.redhat.com/documentation/en-us/red_hat_ceph_storage/" },
          { label: "Ceph — BlueStore Documentation", url: "https://docs.ceph.com/en/latest/rados/configuration/bluestore-config-ref/" },
        ],
      },
      {
        name: "Deployment & Kubernetes Integration",
        items: [
          "cephadm: bootstrap, orchestrator, service specs (bare metal/VM)",
          "Rook-Ceph operator: CephCluster CRD, K8s-native management",
          "RBD (RADOS Block Device): CSI driver, PVs for K8s/OpenShift",
          "CephFS: shared ReadWriteMany storage, MDS scaling",
          "RGW (RADOS Gateway): S3-compatible object storage, users, buckets",
          "Ceph Dashboard & Grafana integration for monitoring",
          "Day-2: adding/removing OSDs, pool tuning, PG autoscaler",
          "Scrubbing, deep-scrub, recovery, backfill operations",
          "Performance tuning: OSD memory target, bluestore cache, network",
        ],
        resources: [
          { label: "Rook — Official Documentation", url: "https://rook.io/docs/rook/latest-release/Getting-Started/intro/" },
          { label: "Rook — Ceph Storage Quickstart", url: "https://rook.io/docs/rook/latest-release/Getting-Started/quickstart/" },
          { label: "Ceph — cephadm Deployment Guide", url: "https://docs.ceph.com/en/latest/cephadm/" },
          { label: "Ceph — RBD Documentation", url: "https://docs.ceph.com/en/latest/rbd/" },
          { label: "Ceph — CephFS Documentation", url: "https://docs.ceph.com/en/latest/cephfs/" },
          { label: "Ceph — RGW Documentation", url: "https://docs.ceph.com/en/latest/radosgw/" },
          { label: "Ceph — Operations Guide", url: "https://docs.ceph.com/en/latest/rados/operations/" },
          { label: "Ceph — Performance Tuning", url: "https://docs.ceph.com/en/latest/rados/configuration/" },
        ],
      },
    ],
  },
  {
    phase: 7,
    title: "OpenSearch & Centralized Logging",
    duration: "Week 13",
    icon: "🔍",
    description: "Full-text search and centralized log aggregation — from shipper to index to dashboard to alert.",
    topics: [
      {
        name: "OpenSearch Core & Operations",
        items: [
          "Cluster architecture: master, data, ingest, coordinating node roles",
          "Index management: mappings, dynamic templates, aliases",
          "ISM (Index State Management): hot/warm/cold/delete policies",
          "Query DSL: match, term, bool, range, aggregations, nested",
          "Security plugin: internal users, roles, tenants, LDAP/AD integration",
          "Snapshot & restore: S3-compatible repos, automated backups",
          "Cross-cluster replication for DR",
          "Performance: JVM heap (50% rule), shard sizing (10–50GB), bulk indexing",
        ],
        resources: [
          { label: "OpenSearch — Official Documentation", url: "https://opensearch.org/docs/latest/" },
          { label: "OpenSearch — Getting Started", url: "https://opensearch.org/docs/latest/getting-started/" },
          { label: "OpenSearch — Index State Management", url: "https://opensearch.org/docs/latest/im-plugin/ism/index/" },
          { label: "OpenSearch — Security Plugin", url: "https://opensearch.org/docs/latest/security/index/" },
          { label: "OpenSearch — API Reference", url: "https://opensearch.org/docs/latest/api-reference/" },
          { label: "OpenSearch — Performance Tuning", url: "https://opensearch.org/docs/latest/tuning-your-cluster/" },
        ],
      },
      {
        name: "Log Pipeline & Dashboards",
        items: [
          "Fluent Bit: lightweight shipper, parsers, filters, outputs",
          "Fluentd: flexible routing, plugins, buffering",
          "Data Prepper: OpenTelemetry traces, metrics, log ingestion",
          "OpenSearch Dashboards: saved searches, visualizations, dashboards",
          "Alerting: monitors, triggers, notification channels (Slack, email, webhook)",
          "Deploying on K8s: Helm charts, OpenSearch Operator",
        ],
        resources: [
          { label: "Fluent Bit — Official Documentation", url: "https://docs.fluentbit.io/manual/" },
          { label: "Fluentd — Official Documentation", url: "https://docs.fluentd.org/" },
          { label: "OpenSearch — Data Prepper", url: "https://opensearch.org/docs/latest/data-prepper/" },
          { label: "OpenSearch — Dashboards Guide", url: "https://opensearch.org/docs/latest/dashboards/" },
          { label: "OpenSearch — Alerting", url: "https://opensearch.org/docs/latest/observing-your-data/alerting/index/" },
          { label: "OpenSearch — Helm Charts (GitHub)", url: "https://github.com/opensearch-project/helm-charts" },
        ],
      },
    ],
  },
  {
    phase: 8,
    title: "CI/CD, GitOps & Infrastructure as Code",
    duration: "Week 14",
    icon: "🚀",
    description: "End-to-end automation — build, test, scan, deploy, and manage infrastructure as code.",
    topics: [
      {
        name: "CI/CD Pipelines",
        items: [
          "Tekton: Tasks, Pipelines, PipelineRuns, Triggers, EventListeners",
          "Jenkins on K8s: Kubernetes plugin, dynamic pod agents, Jenkinsfile",
          "GitLab CI / GitHub Actions: runners, stages, matrix builds",
          "Image build in CI: Kaniko (no Docker daemon), Buildah",
          "Security scanning: Trivy in CI, SAST (SonarQube), DAST (ZAP), SCA (Snyk)",
          "Artifact management: Nexus / Artifactory for binaries & images",
        ],
        resources: [
          { label: "Tekton — Official Documentation", url: "https://tekton.dev/docs/" },
          { label: "Tekton — Getting Started Tutorial", url: "https://tekton.dev/docs/getting-started/" },
          { label: "Jenkins — Pipeline Documentation", url: "https://www.jenkins.io/doc/book/pipeline/" },
          { label: "Jenkins — Kubernetes Plugin", url: "https://plugins.jenkins.io/kubernetes/" },
          { label: "GitLab — CI/CD Documentation", url: "https://docs.gitlab.com/ee/ci/" },
          { label: "Kaniko — Build Images in K8s", url: "https://github.com/GoogleContainerTools/kaniko" },
        ],
      },
      {
        name: "GitOps with ArgoCD",
        items: [
          "GitOps principles: declarative, versioned, pulled, continuously reconciled",
          "ArgoCD: installation, Application CRD, projects, RBAC",
          "App of Apps pattern for managing multiple applications",
          "ApplicationSets: generators (git, list, cluster), templating",
          "Sync policies: auto-sync, self-heal, prune, retry",
          "Multi-cluster GitOps: hub-spoke patterns",
          "Secrets in GitOps: SOPS, Sealed Secrets, External Secrets Operator",
        ],
        resources: [
          { label: "ArgoCD — Official Documentation", url: "https://argo-cd.readthedocs.io/en/stable/" },
          { label: "ArgoCD — Getting Started", url: "https://argo-cd.readthedocs.io/en/stable/getting_started/" },
          { label: "ArgoCD — Best Practices", url: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/" },
          { label: "Flux CD — Official Documentation", url: "https://fluxcd.io/docs/" },
          { label: "OpenGitOps — Principles", url: "https://opengitops.dev/" },
          { label: "CNCF — GitOps Working Group", url: "https://github.com/cncf/tag-app-delivery/tree/main/gitops-wg" },
        ],
      },
      {
        name: "Infrastructure as Code",
        items: [
          "Ansible: inventory, playbooks, roles, collections, Ansible Vault",
          "Ansible for K8s: kubernetes.core collection, k8s module, k8s_info",
          "AWX / Ansible Automation Platform: job templates, surveys, RBAC",
          "Terraform / OpenTofu: providers, resources, state, modules, workspaces",
          "Terraform for on-prem: vSphere, Libvirt, bare metal providers",
          "IaC patterns: cluster bootstrap, config drift detection, compliance",
        ],
        resources: [
          { label: "Ansible — Official Documentation", url: "https://docs.ansible.com/ansible/latest/index.html" },
          { label: "Ansible — kubernetes.core Collection", url: "https://docs.ansible.com/ansible/latest/collections/kubernetes/core/index.html" },
          { label: "Red Hat — Ansible Automation Platform", url: "https://www.redhat.com/en/technologies/management/ansible" },
          { label: "Ansible for DevOps — Jeff Geerling (Book)", url: "https://www.ansiblefordevops.com/" },
          { label: "Terraform — Official Learn Tutorials", url: "https://developer.hashicorp.com/terraform/tutorials" },
          { label: "OpenTofu — Official Documentation", url: "https://opentofu.org/docs/" },
        ],
      },
    ],
  },
  {
    phase: 9,
    title: "Disaster Recovery, HA & Certifications",
    duration: "Week 15",
    icon: "🛡️",
    description: "Production hardening — backup, disaster recovery, chaos testing, performance tuning, and certification prep.",
    topics: [
      {
        name: "Backup & Disaster Recovery",
        items: [
          "DR strategy: RPO (Recovery Point Objective) vs RTO (Recovery Time Objective)",
          "etcd backup: snapshot save, automated cron backups, off-site storage",
          "etcd restore: single-node & multi-node cluster recovery",
          "Velero: backup schedules, include/exclude resources, hooks",
          "Velero restore: namespace-level, cluster-level, cross-cluster migration",
          "Velero + Restic/Kopia for PV data backup",
          "Ceph DR: pool mirroring (RBD), CephFS snapshots, RGW multi-site",
          "OpenSearch DR: snapshot repos, cross-cluster replication",
          "OpenShift DR: must-gather, cluster restore procedures",
          "DR runbooks: documented, tested, version-controlled procedures",
          "DR testing schedule: quarterly full recovery drills",
        ],
        resources: [
          { label: "Kubernetes — etcd Backup & Restore", url: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#backing-up-an-etcd-cluster" },
          { label: "Velero — Official Documentation", url: "https://velero.io/docs/" },
          { label: "Velero — Backup Reference", url: "https://velero.io/docs/main/backup-reference/" },
          { label: "Velero — Restore Reference", url: "https://velero.io/docs/main/restore-reference/" },
          { label: "Ceph — RBD Mirroring", url: "https://docs.ceph.com/en/latest/rbd/rbd-mirroring/" },
          { label: "Ceph — CephFS Snapshots", url: "https://docs.ceph.com/en/latest/cephfs/snap-schedule/" },
          { label: "OpenShift — Backup & Restore Guide", url: "https://docs.openshift.com/container-platform/latest/backup_and_restore/index.html" },
          { label: "OpenSearch — Snapshot & Restore", url: "https://opensearch.org/docs/latest/tuning-your-cluster/availability-and-recovery/snapshots/snapshot-restore/" },
        ],
      },
      {
        name: "High Availability & Chaos Engineering",
        items: [
          "K8s HA: multi-master control plane, etcd quorum, anti-affinity rules",
          "Pod Disruption Budgets (PDBs): minAvailable, maxUnavailable",
          "Pod Topology Spread Constraints across zones/racks",
          "Ceph HA: MON quorum, min_size, CRUSH failure domain design",
          "OpenSearch HA: dedicated masters, shard allocation awareness",
          "Chaos engineering: Litmus Chaos, Chaos Mesh — inject failures safely",
          "Chaos scenarios: pod kill, network partition, disk fill, node drain",
          "Game days: planned failure injection with the whole team",
        ],
        resources: [
          { label: "Kubernetes — Pod Disruption Budgets", url: "https://kubernetes.io/docs/tasks/run-application/configure-pdb/" },
          { label: "Kubernetes — Topology Spread", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/" },
          { label: "Litmus Chaos — Official Documentation", url: "https://litmuschaos.io/docs" },
          { label: "Chaos Mesh — Official Documentation", url: "https://chaos-mesh.org/docs/" },
          { label: "CNCF — Chaos Engineering Whitepaper", url: "https://www.cncf.io/blog/2019/11/06/cloud-native-chaos-engineering/" },
          { label: "Principles of Chaos Engineering", url: "https://principlesofchaos.org/" },
        ],
      },
      {
        name: "Performance Tuning & Autoscaling",
        items: [
          "HPA (Horizontal Pod Autoscaler): CPU, memory, custom metrics",
          "VPA (Vertical Pod Autoscaler): recommendations, auto mode",
          "Cluster Autoscaler / MachineAutoscaler for node scaling",
          "Kernel tuning for containers: vm.max_map_count, net.core.somaxconn",
          "Ceph tuning: OSD memory, bluestore cache, network MTU",
          "OpenSearch: JVM heap, thread pools, circuit breakers, refresh intervals",
          "Certificate & secret rotation automation",
          "Capacity planning: resource usage trends, right-sizing",
        ],
        resources: [
          { label: "Kubernetes — HPA Documentation", url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/" },
          { label: "Kubernetes — VPA Documentation", url: "https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler" },
          { label: "Kubernetes — Cluster Autoscaler", url: "https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler" },
          { label: "Red Hat — Tuning Guide (RHEL)", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/monitoring_and_managing_system_status_and_performance/index" },
        ],
      },
      {
        name: "Certification Preparation",
        items: [
          "CKA — Certified Kubernetes Administrator (Linux Foundation)",
          "CKS — Certified Kubernetes Security Specialist",
          "CKAD — Certified Kubernetes Application Developer",
          "Red Hat EX280 — OpenShift Administration",
          "Red Hat EX180 — Containers & Kubernetes Fundamentals",
          "Exam strategy: time management, imperative commands, bookmarks",
        ],
        resources: [
          { label: "Linux Foundation — CKA Certification", url: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/" },
          { label: "Linux Foundation — CKS Certification", url: "https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/" },
          { label: "Linux Foundation — CKAD Certification", url: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/" },
          { label: "Killer.sh — CKA/CKS/CKAD Exam Simulator", url: "https://killer.sh/" },
          { label: "KodeKloud — Practice Labs & Mock Exams", url: "https://kodekloud.com/" },
          { label: "Red Hat — EX280 Exam Details", url: "https://www.redhat.com/en/services/training/ex280-red-hat-certified-specialist-in-openshift-administration-exam" },
        ],
      },
      {
        name: "Capstone Project",
        items: [
          "Full stack deploy: Git → Tekton → ArgoCD → OpenShift + Ceph + OpenSearch",
          "Complete monitoring: Prometheus → Thanos → Grafana with alerting",
          "Centralized logging: Fluent Bit → OpenSearch → Dashboards + alerts",
          "DR drill: etcd backup/restore + Velero recovery + Ceph failover",
          "IaC: Ansible playbooks bootstrapping entire cluster from scratch",
          "Chaos test: Litmus/Chaos Mesh pod kill & network partition recovery",
        ],
        resources: [
          { label: "Kubernetes — Examples Repository", url: "https://github.com/kubernetes/examples" },
          { label: "OpenShift — Examples & Demos", url: "https://github.com/openshift/origin" },
          { label: "CNCF — Cloud Native Trail Map", url: "https://landscape.cncf.io/" },
        ],
      },
    ],
  },
];

const schedule = [
  { day: "Mon–Tue", activity: "Theory & architecture deep-dives", icon: "📖" },
  { day: "Wed–Thu", activity: "Hands-on labs & practice", icon: "🔬" },
  { day: "Friday", activity: "Team review, demo & knowledge sharing", icon: "🤝" },
];

export default function App() {
  const [openPhase, setOpenPhase] = useState(null);
  const [openTopics, setOpenTopics] = useState({});
  const [checked, setChecked] = useState({});

  const togglePhase = (i) => setOpenPhase(openPhase === i ? null : i);
  const toggleTopic = (p, t) => { const k = `${p}-${t}`; setOpenTopics(v => ({ ...v, [k]: !v[k] })); };
  const toggleCheck = (k) => setChecked(v => ({ ...v, [k]: !v[k] }));

  const phasePct = (phase, pi) => { let t = 0, d = 0; phase.topics.forEach((tp, ti) => tp.items.forEach((_, ii) => { t++; if (checked[`${pi}-${ti}-${ii}`]) d++; })); return t ? Math.round((d / t) * 100) : 0; };
  const totalItems = trainingData.reduce((s, p) => s + p.topics.reduce((s2, t) => s2 + t.items.length, 0), 0);
  const totalDone = Object.values(checked).filter(Boolean).length;
  const pct = totalItems ? Math.round((totalDone / totalItems) * 100) : 0;

  return (
    <div style={{ fontFamily: "'IBM Plex Sans','Segoe UI',system-ui,sans-serif", maxWidth: 920, margin: "0 auto", padding: "32px 16px", color: "#1a1a2e" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box}
        .hd{background:linear-gradient(135deg,#0f0c29,#302b63,#24243e);border-radius:20px;padding:38px 30px;color:#fff;position:relative;overflow:hidden;margin-bottom:10px}
        .hd::before{content:'';position:absolute;top:-50%;right:-18%;width:400px;height:400px;background:radial-gradient(circle,rgba(99,102,241,.15) 0%,transparent 70%);pointer-events:none}
        .hd h1{font-size:26px;font-weight:700;margin:0 0 4px;letter-spacing:-.5px}
        .hd .sub{opacity:.7;font-size:13.5px;margin:0 0 5px;line-height:1.4}
        .badge{display:inline-block;background:rgba(99,102,241,.25);border:1px solid rgba(165,180,252,.3);color:#c7d2fe;font-size:11px;font-weight:600;padding:3px 10px;border-radius:20px;margin-bottom:16px;letter-spacing:.3px}
        .bar-bg{background:rgba(255,255,255,.15);border-radius:10px;height:13px;overflow:hidden}
        .bar-fl{height:100%;border-radius:10px;background:linear-gradient(90deg,#6366f1,#a78bfa);transition:width .5s}
        .bar-st{display:flex;justify-content:space-between;margin-top:7px;font-size:12px;opacity:.8}
        .sch{display:flex;gap:10px;margin:14px 0 22px;flex-wrap:wrap}
        .sc{background:#fff;border:1px solid #e0dff5;border-radius:10px;padding:9px 14px;font-size:12px;flex:1;min-width:155px;display:flex;align-items:center;gap:7px}
        .sc strong{color:#4f46e5}
        .pc{border:1px solid #e5e7eb;border-radius:15px;margin-bottom:11px;background:#fff;overflow:hidden;transition:box-shadow .2s}
        .pc:hover{box-shadow:0 4px 18px rgba(0,0,0,.05)}
        .ph{display:flex;align-items:center;padding:14px 16px;cursor:pointer;gap:11px;user-select:none}
        .pi{font-size:22px;width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:#f5f3ff;border-radius:11px;flex-shrink:0}
        .pm{flex:1;min-width:0}.pm h2{margin:0;font-size:14px;font-weight:600;color:#1e1b4b}.pm span{font-size:11px;color:#6b7280;font-weight:500}
        .pp{width:48px;text-align:right;font-size:12px;font-weight:600;color:#6366f1;font-family:'JetBrains Mono',monospace}
        .cv{font-size:14px;color:#9ca3af;transition:transform .25s;flex-shrink:0}.cv.o{transform:rotate(180deg)}
        .pb{padding:0 16px 16px;border-top:1px solid #f3f4f6}
        .pd{font-size:12.5px;color:#6b7280;margin:10px 0 14px;font-style:italic;line-height:1.5}
        .tb{margin-bottom:10px;border:1px solid #e5e7eb;border-radius:11px;overflow:hidden}
        .th{display:flex;align-items:center;padding:10px 13px;cursor:pointer;background:#fafafe;gap:8px;font-weight:600;font-size:12.5px;color:#312e81;user-select:none}
        .th:hover{background:#f0eef9}
        .tc{font-size:11px;color:#a5b4fc;transition:transform .2s;margin-left:auto}.tc.o{transform:rotate(90deg)}
        .tbd{padding:3px 13px 13px}
        .cl{list-style:none;padding:0;margin:5px 0 0}
        .cl li{display:flex;align-items:flex-start;gap:8px;padding:4px 0;font-size:12px;line-height:1.5;color:#374151;cursor:pointer}
        .cl li:hover{color:#111}
        .cb{width:16px;height:16px;border-radius:4px;border:2px solid #c7d2fe;flex-shrink:0;display:flex;align-items:center;justify-content:center;margin-top:2px;transition:all .15s;font-size:9px}
        .cb.k{background:#6366f1;border-color:#6366f1;color:#fff}
        .dn{text-decoration:line-through;opacity:.4}
        .rs{margin-top:10px;padding-top:9px;border-top:1px dashed #e5e7eb}
        .rl{font-size:9px;text-transform:uppercase;letter-spacing:1px;color:#9ca3af;font-weight:600;margin-bottom:5px}
        .ra{display:inline-flex;align-items:center;gap:4px;background:#eef2ff;color:#4338ca;text-decoration:none;font-size:11px;padding:4px 9px;border-radius:5px;margin:0 5px 5px 0;font-weight:500;transition:background .15s;line-height:1.3}
        .ra:hover{background:#ddd6fe}
        .ft{text-align:center;color:#9ca3af;font-size:11px;margin-top:26px;padding-top:16px;border-top:1px solid #f3f4f6;line-height:1.6}
      `}</style>

      <div className="hd">
        <h1>OnPrem DevOps Team Training Plan</h1>
        <p className="sub">Linux · Kubernetes · OpenShift · Ceph · OpenSearch · CI/CD · GitOps · IaC · Disaster Recovery</p>
        <div className="badge">15 WEEKS · COMPREHENSIVE · PROFESSIONAL TRACK</div>
        <div className="bar-bg"><div className="bar-fl" style={{ width: `${pct}%` }} /></div>
        <div className="bar-st"><span>{totalDone} / {totalItems} topics</span><span>{pct}%</span></div>
      </div>

      <div className="sch">
        {schedule.map((s, i) => <div key={i} className="sc"><span>{s.icon}</span><span><strong>{s.day}</strong> — {s.activity}</span></div>)}
      </div>

      {trainingData.map((phase, pi) => {
        const isOpen = openPhase === pi;
        const prog = phasePct(phase, pi);
        return (
          <div key={pi} className="pc">
            <div className="ph" onClick={() => togglePhase(pi)}>
              <div className="pi">{phase.icon}</div>
              <div className="pm"><h2>Phase {phase.phase}: {phase.title}</h2><span>{phase.duration}</span></div>
              <div className="pp">{prog}%</div>
              <div className={`cv ${isOpen ? "o" : ""}`}>▼</div>
            </div>
            {isOpen && (
              <div className="pb">
                <div className="pd">{phase.description}</div>
                {phase.topics.map((topic, ti) => {
                  const tKey = `${pi}-${ti}`;
                  const tOpen = openTopics[tKey];
                  return (
                    <div key={ti} className="tb">
                      <div className="th" onClick={() => toggleTopic(pi, ti)}>
                        <span className={`tc ${tOpen ? "o" : ""}`}>▶</span>{topic.name}
                      </div>
                      {tOpen && (
                        <div className="tbd">
                          <ul className="cl">
                            {topic.items.map((item, ii) => {
                              const ik = `${pi}-${ti}-${ii}`;
                              const done = !!checked[ik];
                              return <li key={ii} onClick={() => toggleCheck(ik)}><div className={`cb ${done ? "k" : ""}`}>{done && "✓"}</div><span className={done ? "dn" : ""}>{item}</span></li>;
                            })}
                          </ul>
                          <div className="rs">
                            <div className="rl">Official Learning Resources</div>
                            <div>{topic.resources.map((r, ri) => <a key={ri} href={r.url} target="_blank" rel="noopener noreferrer" className="ra">↗ {r.label}</a>)}</div>
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
      <div className="ft">OnPrem DevOps — 15-week professional track with official resources.<br />Finish with a capstone project + DR drill that ties every phase into a production-grade stack.</div>
    </div>
  );
}
